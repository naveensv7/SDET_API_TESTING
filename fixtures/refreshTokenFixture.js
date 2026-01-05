import { RefreshToken } from "../apicclients/RefreshToken";

export const refreshTokenFixture = {
  refreshauthtoken: async ({ api }, use) => {
    await use(async (rtken) => {
      const rtk = new RefreshToken(api);
      return await rtk.refreshTken(rtken);
    });
  },
};
