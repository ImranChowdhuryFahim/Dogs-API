import { seedDogs } from "./seeds/dogs.seed";
import { sequelize } from "./connection";
import logger from "../logger";
import { createDb } from "./createDb";

export const initialize = async () => {
    await createDb();
    logger.info('created database');
    await sequelize.sync({ force: true });
    logger.info('syncing database');
    await seedDogs();
    logger.info('dogs seeded');
    logger.info('Database inisialization complete');

    process.exit(0);
};


initialize();