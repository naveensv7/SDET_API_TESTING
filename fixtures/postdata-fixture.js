import { AuthClient } from "../apicclients/AuthClient.js";
import { DBclient } from "../apicclients/DbClient.js";

export const postDataFixture = {
  postData: async ({ api, db }, use) => {
    const auth = new AuthClient(api);

    const newConnection = new DBclient(db);

    try {
      const { username, password } = (await newConnection.getUser())[0];

      const response = await auth.login(username, password);
      const body = await response.json();
      await use(body);
    } catch (error) {
      await use(error);
    }
  },
};
