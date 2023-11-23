const knex = require("../db/db");

const createContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { address, phone } = req.body;
    const user = await knex("user").where({ id }).first();
    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: `no user found with id ${id}` });
    }
    await knex("contacts").insert({
      address,
      phone,
    });
    return res.status(200).json({ success: true, address, phone });
  } catch (error) {
    console.error(error);
  }
};

const getUserWithContacts = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await knex("user").where({ id }).first();

    if (!User) {
      return res
        .status(404)
        .json({ success: false, error: `no user found with id ${id}` });
    }
    const userWithContacts = await knex("contacts")
      .where("contacts.user_id", User.id)
      .select();
    res.status(200).json({ success: true, userWithContacts });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createContact, getUserWithContacts };
