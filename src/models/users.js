const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db_pg');

const User = sequelize.define(
  'Users',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },

    username: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    // created_at: {
    //   type: DataTypes.TIMESTAMP,
    //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    // },
    // updated_at: {
    //   type: DataTypes.DATE,
    //   defaultValue: Sequelize.NOW,
    // },
  },
  {
    timestamps: false,
    tableName: 'users',
  }
);

User.sync();

module.exports = User;
