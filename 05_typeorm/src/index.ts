require("dotenv").config();
import { AppDataSource } from "./data-source";
import express from "express";
import { createClient } from "./routes/createClient";
import { createBanker } from "./routes/createBanker";
import { createTransaction } from "./routes/createTransaction";
import { connectBankerToClient } from "./routes/connectBankerToClient";
import { deleteClient } from "./routes/deleteClient";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(createClient);
app.use(createBanker);
app.use(createTransaction);
app.use(connectBankerToClient);
app.use(deleteClient);

app.listen(3000, () => {
  console.log("server has been started at port 3000");
});

AppDataSource.initialize()
  .then(() => {
    console.log("database has been initialized");
  })
  .catch((error) => {
    console.log(error);
  });
