
module.exports = {
    port: 3000,
    development: {
      /*dialect: "sqlite",
      storage: "./db.development.sqlite"*/
      username: "sql11397981",
      password: "DGnYNgMRRQ",
      database: "sql11397981",
      host: "sql11.freesqldatabase.com",
      dialect: 'mysql'
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