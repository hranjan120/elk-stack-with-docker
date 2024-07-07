const winston = require("winston");
const LogstashTransport = require("winston-logstash/lib/winston-logstash-latest");

const loggerMethod = () => {
    const logger = winston.createLogger({
        transports: [
            new LogstashTransport({
                port: 28777,
                node_name: "my-logger-node",
                host: "http://logstash:5044",
            }),
        ],
    });

    logger.info("Hello world!");

    return { status: true, msg: 'success' };
}

module.exports = { loggerMethod }