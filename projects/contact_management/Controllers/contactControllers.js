//@routes GET /api/contacts  -- all contacts
const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

//@routes POST /api/contacts  -- create contact
const createContact = (req, res) => {
  res.status(201).json({ message: "Contact created successfully" });
};

//@routes GET /api/contacts/:id  -- all particular contact
const getContact = (req, res) => {
  res
    .status(200)
    .json({ message: `contact ${req.params.id} is fetched successfully` });
};

//@routes PUT /api/contacts/:id  -- all contacts
const updateContact = (req, res) => {
  res
    .status(200)
    .json({ message: `contact ${req.params.id} is updated successfully` });
};

//@routes DELETE /api/contacts/:id  -- all contacts
const deleteContact = (req, res) => {
  res
    .status(200)
    .json({ message: `contact ${req.params.id} is deleted successfully` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
