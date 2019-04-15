// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      database: 'otaku-catering',
      password: 'President44'
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
      host: 'localhost',
      user: 'root',
      database: 'otaku-catering',
      password: 'President44'
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
      host: 'localhost',
      user: 'root',
      database: 'otaku-catering',
      password: 'President44'
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
