// const knex = require("knex");
const knex = require("../db/db");

// TODO --- GET, POST, UPDATE, DELETE

const getAllUser = async (req, res) => {
  // res.send("hello there!!");
  const users = await knex("user").select();
  if (!users) {
    return res.status(404).json({ error: `no users to show` });
  }
  res.status(200).json({ success: true, users });
};

const postUser = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;

    if (!email || !firstName || !lastName) {
      return res
        .status(400)
        .json({ success: false, error: `please fill all the required values` });
    }
    await knex("user").insert({
      email,
      first_name: firstName,
      last_name: lastName,
    });
    res.status(200).json({ success: true, email, firstName, lastName });
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await knex("user").where({ id }).first();
    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, error: `user with id ${id} not found` });
    }
    return res.status(200).json({ findUser });
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    const user = await knex("user").where({ id }).first();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: `user with id ${id} not found` });
    }
    await knex("user").update({ first_name: firstName, last_name: lastName });
    res.status(200).json({ success: true, firstName, lastName });
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await knex("user").where({ id }).first();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: `there is no user with user id ${id}` });
    }
    const deleteUser = await knex("user").where({ id }).delete();
    res.status(200).json({
      success: true,
      message: `user with id ${id} deleted successfully`,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllUser, postUser, getUser, updateUser, deleteUser };
