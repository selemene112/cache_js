const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://admin:lele123@127.0.0.1:5432/local1'); // Example for postgres

const sequelize = new Sequelize('postgres', 'admin', 'lele123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
