import logger from './logger';
import app from './api/app';
import config from './config';
import dbInitialize from './loaders';


dbInitialize().then(()=>{
    logger.info("connected and initialized database");
}).catch((err)=>{
    logger.error(err);
})
app.listen(config.express.port, () => {
    logger.info(`Listening to port: ${config.express.port}`);
})