import { seedDogs } from "./dogs.seed";
import { sequelize } from "../connection";
import logger from "../../logger";
import dbInitialize from "../initializer";

export const seedAll = async () => {
  await dbInitialize();
  logger.info('initialized database');
  await sequelize.sync({ force: true });
  logger.info('syncing database');
  await seedDogs();
  logger.info('dogs seeded');
  logger.info('All seeds complete');

  process.exit(0);
};


seedAll();