// Update with your config settings.
require('dotenv').config();
const mysql = require('mysql2');
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      connectionLimit : 100,
      host : process.env.DATABASE_HOST,
      user : process.env.DATABASE_USERNAME,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE,
      debug : 'false'
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
      host: process.env.DATABASE_HOST,
        database: process.env.DATABASE,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
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
      host: process.env.DATABASE_HOST,
        database: process.env.DATABASE,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
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
