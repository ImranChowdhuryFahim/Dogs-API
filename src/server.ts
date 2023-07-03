import logger from './logger';
import app from './api/app';
import config from './config';
import { createDb } from './database/createDb';
import { sequelize } from './database/connection';


createDb().then(() => {
    logger.info("Database created if not exists");
    sequelize.sync({ alter: true }).then(() => logger.info("Synced with database"))
        .catch((err) => { logger.error(err); });
}).catch((err) => {
    logger.error(err);
})


app.listen(config.express.port, () => {
    logger.info(`Listening to port: ${config.express.port}`);
})