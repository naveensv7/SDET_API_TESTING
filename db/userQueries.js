export const insertuser = async (connect, username, password) => {
  try {
    const [row] = await connect.execute(
      "insert into users (username,password) values (?,?)",
      [username, password]
    );
    return row;
  } catch (error) {
    return error;
  }
};

export const getuser = async (conn) => {
  const [row] = await conn.execute("select * from users");
  return row;
};

export const addTken = async (conn, atoken, rtoken, username) => {
  try {
    const dt = await conn.execute(
      "insert ignore into tokens (atoken,rtoken,username) values(?,?,?)",
      [atoken, rtoken, username]
    );

    return dt;
  } catch (error) {
    return error;
  }
};

export const getTkn = async (conn, username) => {
  try {
    const [rows] = await conn.execute("select * from tokens where username=?", [
      username,
    ]);
    return rows;
  } catch (error) {
    return error;
  }
};

export const updateToken = async (conn, atoken, rtoken, username) => {
  try {
    const resp = await conn.execute(
      "update tokens set atoken=?, rtoken=? where username=?",
      [atoken, rtoken, username]
    );

    return resp;
  } catch (error) {
    return error;
  }
};
