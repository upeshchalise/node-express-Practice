const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("This is the home page and its just the start");
});

app.get("/about", (req, res) => {
  res.status(200).send("This is the about page");
});

// it is used to route all types of request
app.all("*", (req, res) => {
  res.status(404).send("<h1>This page is not available damnit</h1>");
});

app.listen(3000, () => {
  console.log("server is started at port 3000");
});
