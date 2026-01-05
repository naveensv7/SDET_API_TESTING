import { test, expect } from "../../fixtures/baseFixture.js";
import { DBclient } from "../../apicclients/DbClient.js";
test("Get User From the request", async ({ getData, dbutil }) => {
  const { username, password } = await getData(1);

  await dbutil.insertUser(username, password);
});
test("Get Token after login", async ({ postData, dbutil }) => {
  expect(postData).toEqual(
    expect.objectContaining({
      accessToken: expect.any(String),
    })
  );

  const { accessToken, refreshToken, username } = postData;

  // console.log(accessToken, refreshToken, username);

  const response = await dbutil.addToken(accessToken, refreshToken, username);

  expect(response[0].affectedRows).toBe(1);
});

test("Check the atoken works", async ({ checkauth, dbutil, getData }) => {
  const { username } = await getData(1);
  const { atoken } = (await dbutil.getToken(username))[0];
  const dt = await checkauth(atoken);
  expect(dt.status()).toBe(200);
});
test("Check refresh token logic", async ({
  checkauth,
  dbutil,
  getData,
  refreshauthtoken,
}) => {
  const { username: username1 } = await getData(1);

  let { atoken: atoken1, rtoken: rtoken1 } = (
    await dbutil.getToken(username1)
  )[0];
  atoken1 = atoken1 + 123;
  const dt = await checkauth(atoken1);
  if ([401, 403].includes(dt.status())) {
    const bdy = await refreshauthtoken(rtoken1);
    expect(bdy.status()).toBe(200);

    const { accessToken, refreshToken } = await bdy.json();

    const resp = dbutil.updateToken(accessToken, refreshToken, username);

    expect(resp[0].affectedRows).toBe(1);
    expect(resp[0].changedRows).toBe(1);
  }
  const { username } = await getData(1);
  const { atoken } = (await dbutil.getToken(username))[0];
  const dt2 = await checkauth(atoken);

  expect(dt2.status()).toBe(200);
});
