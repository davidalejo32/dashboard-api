import { DataTypes } from 'sequelize';
import {sequelizeNEPS} from '../../database/database.js';

const GlpiTicketUser = sequelizeNEPS.define('glpi_tickets_users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  tickets_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  users_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  use_notification: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1
  },
  alternative_email: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'glpi_tickets_users',
  timestamps: false // Si la tabla tiene campos de fecha de creación y modificación
});

export default GlpiTicketUser;
