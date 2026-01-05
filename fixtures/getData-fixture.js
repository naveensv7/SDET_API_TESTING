import { AuthClient } from "../apicclients/AuthClient";
import { test as base } from "./api-fixture";
import { UserData } from "../apicclients/UserData";

export const getDataFixture = {
  getData: async ({ api }, use) => {
    await use(async (userId) => {
      const user = new UserData(api);
      const data = await user.getUserData(userId);
      const body = await data.json();
      return body;
    });
  },
};
