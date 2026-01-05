// api-clients/AuthClient.ts

export class AuthClient {
  constructor(api) {
    this.api = api;
  }

  async login(username, password) {
    return await this.api.post("auth/login", {
      data: {
        username,
        password,
      },
    });
  }
}
