export const config = {
  baseUrl: "https://dummyjson.com/",
  db: {
    host: process.env.CI ? process.env.DB_HOST : "host.docker.internal",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.CI ? process.env.DB_PORT : 3308,
  },
};
