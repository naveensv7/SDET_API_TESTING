import mysql from "mysql2/promise";
import { config } from "../config/env.js";

export const dbConnection = async () => {
  const connection = await mysql.createConnection(config.db);
  console.log("Connected to databse");
  return connection;
};
