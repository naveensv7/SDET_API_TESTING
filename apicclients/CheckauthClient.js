export class CheckauthClient {
  constructor(api) {
    this.api = api;
  }

  async checkauthme(token) {
    const response = await this.api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}
