
module.exports = {
    port: 3000,
    development: {
      /*dialect: "sqlite",
      storage: "./db.development.sqlite"*/
      username: "root",
      password: "",
      database: "testnpm",
      host: "localhost",
      dialect: 'mysql',
    },
    test: {
      dialect: "sqlite",
      storage: ":memory:"
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mysql',
      use_env_variable: 'DATABASE_URL'
    }
};