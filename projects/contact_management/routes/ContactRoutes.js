const express = require("express");
const router = express.Router();

const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../Controllers/contactControllers");

// get all contact
router.get("/", getContacts);

// get particular contact
router.get("/:id", getContact);

// post contact
router.post("/", createContact);

// update a contact
router.put("/:id", updateContact);

// delete a contact
router.delete("/:id", deleteContact);

module.exports = router;
