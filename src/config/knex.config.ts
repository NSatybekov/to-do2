
import { KnexModule, KnexModuleOptions } from "nest-knexjs";
const path = require('path')

export const knexConfig: KnexModuleOptions = {
    config: {
        client: 'pg',
        version: '13',
        useNullAsDefault: true,
        connection: { 
          host: process.env.DB_HOST || '127.0.0.1',
          user: 'postgres', 
          password: '123',
          database: 'nest',
          port: 5432,
        },
        migrations: {
            directory: path.resolve(__dirname, `../../migrations`)
        }
      }
}
