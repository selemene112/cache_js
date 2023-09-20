const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db_pg'); // Sesuaikan dengan lokasi konfigurasi Sequelize Anda

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
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
    timestamps: false, // Set to true if you want to include timestamps (createdAt, updatedAt)
    tableName: 'users', // Nama tabel di basis data
  }
);

// Sinkronkan model dengan database (tabel akan dibuat jika belum ada)
User.sync();

module.exports = User;
