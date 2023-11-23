const express = require("express");
const router = express.Router();

const {
  getAllUser,
  postUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../../dao/user.modal");

const {
  createContact,
  getUserWithContacts,
} = require("../../dao/contact.modal");

router.get("/users", getAllUser);
router.get("/users/:id", getUser);
router.post("/users", postUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

//
router.post("/user/contact/:id", createContact);
router.get("/user/contact/:id", getUserWithContacts);

module.exports = router;
