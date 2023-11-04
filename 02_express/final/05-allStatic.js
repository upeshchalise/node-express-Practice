const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "./navbar_app/index.html"));
  // adding into statoc
  // ssr
});

app.all("*", (req, res) => {
  res.status(404).send("resource is not found");
});

app.listen(3000, () => {
  console.log("server is started at port 3000...");
});
