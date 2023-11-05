const express = require("express");
const { Logger } = require("./middlewares/Logger");
const { Authorize } = require("./middlewares/Authorize");
const morgan = require("morgan");

const app = express();

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// app.use([Logger, Authorize])
// app.use(express.static("./public"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/about", (req, res) => {
  res.send("this is the about page");
});

app.get("/api/products", (req, res) => {
  res.send("this is the products page");
});

app.get("/api/items", (req, res) => {
  res.send("this is the page where all the items are listed");
});

app.listen(3000, () => {
  console.log("server has started at port 3000...");
});
