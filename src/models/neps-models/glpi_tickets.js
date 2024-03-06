// GlpiTicket.js
import { DataTypes } from 'sequelize';
import {sequelizeNEPS} from '../../database/database.js';

const GlpiTicket = sequelizeNEPS.define('glpi_ticket', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  entities_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  closedate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  solvedate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  date_mod: {
    type: DataTypes.DATE,
    allowNull: true
  },
  users_id_lastupdater: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  users_id_recipient: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  requesttypes_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  urgency: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  impact: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  itilcategories_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  global_validation: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  slas_id_ttr: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  slas_id_tto: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  slalevels_id_ttr: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  time_to_resolve: {
    type: DataTypes.DATE,
    allowNull: true
  },
  time_to_own: {
    type: DataTypes.DATE,
    allowNull: true
  },
  begin_waiting_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  sla_waiting_duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  ola_waiting_duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  olas_id_tto: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  olas_id_ttr: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  olalevels_id_ttr: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  ola_ttr_begin_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  internal_time_to_resolve: {
    type: DataTypes.DATE,
    allowNull: true
  },
  internal_time_to_own: {
    type: DataTypes.DATE,
    allowNull: true
  },
  waiting_duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  close_delay_stat: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  solve_delay_stat: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  takeintoaccount_delay_stat: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  actiontime: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  locations_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  validation_percent: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  date_creation: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'glpi_tickets',
  timestamps: false
});

export default GlpiTicket;

