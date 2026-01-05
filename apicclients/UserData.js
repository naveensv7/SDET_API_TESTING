export class UserData {
  constructor(api) {
    this.api = api;
  }
  async getUserData(id) {
    return await this.api.get(`/users/${id}`);
  }
}
