const express = require("express");
const app = express();

let { people } = require("./data");

// static assests
app.use(express.static("./final/methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide the value for name" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send(`Please provide credentials`);
});

app.listen(3000, () => {
  console.log(`server has started at port 3000...`);
});
