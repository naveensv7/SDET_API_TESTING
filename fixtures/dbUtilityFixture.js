import { DBclient } from "../apicclients/DbClient";

export const dbUtilityFixture = {
  dbutil: async ({ db }, use) => {
    const conn = new DBclient(db);
    await use(conn);
  },
};
