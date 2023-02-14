// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = require('knex')( {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: 'postgres',
      password: '123',
      database: 'nest',
      port: '5432',
    },
    migrations: {
      directory: './migrations'
    }
  }, 

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

})
