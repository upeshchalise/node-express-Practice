const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/ContactRoutes"));

app.listen(port, () => {
  console.log(`server is listening at the port ${port}`);
});
