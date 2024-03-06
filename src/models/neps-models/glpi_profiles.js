// GlpiProfile.js
import { DataTypes } from 'sequelize';
import {sequelizeNEPS} from '../../database/database.js';

const GlpiProfile = sequelizeNEPS.define('glpi_profile', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  interface: {
    type: DataTypes.STRING,
    defaultValue: 'helpdesk'
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  helpdesk_hardware: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  helpdesk_item_type: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ticket_status: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date_mod: {
    type: DataTypes.DATE,
    allowNull: true
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  problem_status: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  create_ticket_on_login: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  tickettemplates_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  changetemplates_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  problemtemplates_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  change_status: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  managed_domainrecordtypes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date_creation: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'glpi_profiles',
  timestamps: false
});

export default GlpiProfile;
