export class RefreshToken {
  constructor(api) {
    this.api = api;
  }

  async refreshTken(rtken) {
    return await this.api.post("/auth/refresh", {
      data: {
        refreshToken: rtken,
      },
    });
  }
}
