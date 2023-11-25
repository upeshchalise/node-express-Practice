const express = require("express");
const app = express();
require("dotenv").config;
const router = require("./db/routes/router.modal");
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use(router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
