import { Sequelize } from "sequelize";
import config from "../config";

const env = config.env;
const { database, username, password, host, dialect } = config.sequelize[env];
export const sequelize = new Sequelize(database, username, password, { host, dialect });