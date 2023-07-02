import dotenv from "dotenv";
dotenv.config();

interface express {
    port:number;
    testPort:number;
}

interface dbConfig{
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: any;
}

interface sequelize{
    [key: string]: dbConfig;
}

export interface Config {
    env: string;
    express: express;
    sequelize: sequelize;
}

export default {
    env : process.env.NODE_ENV || 'development',
    express: {
        port: process.env.EXPRESS_PORT || 4000,
        testPort: process.env.EXPRESS_TEST_PORT || 4001
    },
    sequelize: {
        development: {
            username: process.env.DEV_DB_USERNAME || 'root',
            password: process.env.DEV_DB_PASSWORD || 'password',
            database: process.env.DEV_DB_NAME || 'database_dev',
            host: process.env.DEV_DB_HOSTNAME || 'localhost',
            dialect: process.env.DEV_DB_DIALECT || 'mssql',
            
        },
        test: {
            username: process.env.TEST_DB_USERNAME || 'root',
            password: process.env.TEST_DB_PASSWORD || 'root',
            database: process.env.TEST_DB_NAME || 'database_test',
            host: process.env.TEST_DB_HOSTNAME || 'localhost',
            dialect: process.env.TEST_DB_DIALECT || 'mssql',
            
        },
        production: {
            username: process.env.PROD_DB_USERNAME || 'root',
            password: process.env.PROD_DB_PASSWORD || 'password',
            database: process.env.PROD_DB_NAME || 'database_prod',
            host: process.env.PROD_DB_HOSTNAME || 'localhost',
            dialect: process.env.PROD_DB_DIALECT || 'mssql',
            
        }
    },

} as Config;