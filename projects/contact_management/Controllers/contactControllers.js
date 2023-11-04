const asyncHandler = require("express-async-handler");

//@routes GET /api/contacts  -- all contacts
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

//@routes POST /api/contacts  -- create contact
const createContact = asyncHandler(async (req, res) => {
  const { name, email, address } = req.body;
  if (!name || !email || !address) {
    res.status(400);
    throw new Error("All the fields are necessary");
  }

  console.log("The request body is:", req.body);
  res.status(201).json({ message: "Contact created successfully" });
});

//@routes GET /api/contacts/:id  -- all particular contact
const getContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `contact ${req.params.id} is fetched successfully` });
});

//@routes PUT /api/contacts/:id  -- all contacts
const updateContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `contact ${req.params.id} is updated successfully` });
});

//@routes DELETE /api/contacts/:id  -- all contacts
const deleteContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `contact ${req.params.id} is deleted successfully` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
