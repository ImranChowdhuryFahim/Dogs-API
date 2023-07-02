import winston from "winston";

const { transports } = winston;
const { printf, timestamp, colorize, combine, errors } = winston.format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});

const logger = winston.createLogger({
    format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({ stack: true }),
        logFormat
    ),
    transports: [new transports.Console()],

    exitOnError: false
});


export default logger;
