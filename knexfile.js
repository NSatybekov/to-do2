// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports =  {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: 'postgres',
      password: '123',
      database: 'nest',
      port: 5434,
    }
  },
  migrations: {
    directory: './migrations'
  }


}
