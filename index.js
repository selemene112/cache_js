const express = require('express');
const app = express();
const port = 3001;
const sequelize = require('./src/config/db_pg');
const userRoutes = require('./src/route/userroute');

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
