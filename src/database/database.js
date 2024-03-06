import Sequelize from "sequelize";
import { DB_NAME_ACS, DB_USERNAME_ACS, DB_HOST_ACS, DB_PASSWORD_ACS, DB_NAME_NEPS, DB_USERNAME_NEPS, DB_HOST_NEPS, DB_PASSWORD_NEPS } from "../config.js";

export const sequelizeAcs = new Sequelize(DB_NAME_ACS, DB_USERNAME_ACS, DB_PASSWORD_ACS, {
  host: DB_HOST_ACS,
  dialect: "mariadb",
});


export const sequelizeNEPS = new Sequelize(DB_NAME_NEPS, DB_USERNAME_NEPS, DB_PASSWORD_NEPS, {
  host: DB_HOST_NEPS,
  dialect: "mariadb",
});

