// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
      directory: './database/migrations/',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds/',
    }
  },

  staging: {
    client: 'mysql2',
      connection: {
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
      },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations/',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds/',
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations/',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds/',
    }
  }

};
