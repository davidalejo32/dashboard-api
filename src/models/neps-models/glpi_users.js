// GlpiUser.js
import { DataTypes } from 'sequelize';
import {sequelizeNEPS} from '../../database/database.js';

const GlpiUser = sequelizeNEPS.define('glpi_user', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password_last_update: {
    type: DataTypes.DATE,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: true
  },
  realname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  locations_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  language: {
    type: DataTypes.CHAR(10),
    allowNull: true
  },
  use_mode: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  // Agrega los demás campos según sea necesario
}, {
  tableName: 'glpi_users',
  timestamps: false
});

export default GlpiUser;
