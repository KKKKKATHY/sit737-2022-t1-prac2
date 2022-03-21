const logger = require("pino")()

const infoLog = (msg) => {
    logger.info("[Kathy's Server Info]: %s", msg)
}

const warnLog = (msg) => {
    logger.warn("[Kathy's Server Warn]: %s", msg)
}

const errLog = (msg) => {
    logger.error("[Kathy's Server Error]: %s", msg)
}

const fatalLog = (msg) => {
    logger.error("[Kathy's Server Fatal]: %s", msg)
}

module.exports = {
    infoLog,
    warnLog,
    errLog,
    fatalLog
}