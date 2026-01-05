import { CheckauthClient } from "../apicclients/CheckauthClient";

export const checkauthFixture = {
  checkauth: async ({ api }, use) => {
    await use(async (token) => {
      const cauth = new CheckauthClient(api);
      const resp = await cauth.checkauthme(token);
      return resp;
    });
  },
};
