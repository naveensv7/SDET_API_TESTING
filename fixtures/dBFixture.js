import { dbConnection } from "../db/db.js";

export const dbFixture = {
  db: [
    async ({}, use) => {
      const connection = await dbConnection();
      await connection.beginTransaction();
      try {
        await use(connection);
      } finally {
        await connection.rollback();
        await connection.end();
      }
    },
    { scope: "worker" },
  ],
};
