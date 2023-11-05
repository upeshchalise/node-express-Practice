const express = require("express");
const { Logger } = require("../middlewares/Logger");
const { Authorize } = require("../middlewares/Authorize");

const app = express();

// req => middleware => res

app.use([Logger, Authorize]);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/api/products", (req, res) => {
  res.send("This is the product page");
});

app.get("/api/items", (req, res) => {
  res.send("Items available are listed here");
});

app.listen(3000, () => {
  console.log("server has started at port 3000...");
});
