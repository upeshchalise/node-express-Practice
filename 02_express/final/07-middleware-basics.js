const express = require("express");

const app = express();

// req => middleware => res

const Logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", Logger, (req, res) => {
  res.send("Home page");
});

app.get("/about", Logger, (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("server has started at port 3000...");
});
