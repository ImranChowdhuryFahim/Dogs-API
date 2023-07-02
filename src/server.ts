import logger from './logger';
import app from './api/app';
import config from './config';
import dbInitialize from './database/initializer';
import { sequelize } from './database/connection';


dbInitialize().then(() => {
    logger.info("initialized database");
    sequelize.sync({ force: true }).then(() => logger.info("connected and synced database"));
}).catch((err) => {
    logger.error(err);
})
app.listen(config.express.port, () => {
    logger.info(`Listening to port: ${config.express.port}`);
})