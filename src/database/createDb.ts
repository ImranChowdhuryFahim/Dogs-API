import config from '../config';
import {Connection,Request} from 'tedious';

const env: string = config.env;
const { database, host, username, password } = config.sequelize[env];

const dbConfig = {
    server: host,
    options: {
        port: 1433,
        trustServerCertificate: true
    },
    authentication: {
        type: "default",
        options: {
            userName: username,
            password: password
        }
    }
}




export async function createDb() {
    return new Promise<void>((resolve, reject) => {

        const connection = new Connection(dbConfig);
        connection.connect((err: any) => {
            if (err) {
                reject(`Connection Failed: ${err.message}`);
            }

            const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${database}') CREATE DATABASE [${database}];`;

            // var request = require('tedious').Request;
            const request = new Request(createDbQuery, (err: any) => {
                if (err) {
                    reject(`Create DB Query Failed: ${err.message}`);
                }

                // query executed successfully
                resolve();
            });

            connection.execSql(request);
        });
    });
}