require("dotenv").config();
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("database has been initialized");
  })
  .catch((error) => {
    console.log(error);
  });
