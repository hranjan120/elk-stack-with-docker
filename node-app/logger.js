const { createLogger, transports, format } = require('winston');
const LogstashTransport = require("winston-logstash/lib/winston-logstash-latest");

/*-------------------*/
const loggerMethod = (logType, msg, appName) => {
    const logger = createLogger({
        format: format.combine(
            format.label({ label: appName }),
            format.timestamp(),
            format.errors({ stack: true }), // Include stack traces (if any)
            format.splat(), // Allows logging objects as well
            format.json()
        ),
        defaultMeta: { myCustomField: 'my custom field value', environment: 'dev' },
        transports: [
            new LogstashTransport({
                port: 28777,
                node_name: "my-logger-node",
                host: "logstash",
            }),
        ],
    });

    if (logType === 'info') {
        logger.info(msg);
    }
    if (logType === 'error') {
        logger.error(msg);
    }
    if (logType === 'warn') {
        logger.warn(msg);
    }
    if (logType === 'verbose') {
        logger.verbose(msg);
    }
    if (logType === 'debug') {
        logger.debug(msg);
    }
    if (logType === 'silly') {
        logger.silly(msg);
    }

    return { status: true, msg: 'success' };
}

module.exports = { loggerMethod }