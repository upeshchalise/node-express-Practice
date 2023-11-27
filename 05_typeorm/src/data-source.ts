import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client } from "./entities/client";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Client],
  migrations: [],
  subscribers: [],
});
