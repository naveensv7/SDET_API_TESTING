import { insertuser, getuser, addTken, getTkn } from "../db/userQueries.js";

export class DBclient {
  constructor(conn) {
    this.conn = conn;
  }
  async insertUser(username, password) {
    return await insertuser(this.conn, username, password);
  }
  async getUser() {
    return await getuser(this.conn);
  }

  async addToken(atoken, rtoken, username) {
    return await addTken(this.conn, atoken, rtoken, username);
  }

  async getToken(username) {
    return await getTkn(this.conn, username);
  }
  async updateToken(atoken, rtoken, username) {
    return await this.updateToken(this.conn, atoken, rtoken, username);
  }
}
