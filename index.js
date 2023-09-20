const express = require('express');
const app = express();
const port = 3001;
const sequelize = require('./src/config/db_pg');

const makeMeFunction = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

makeMeFunction();

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
