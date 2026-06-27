const { errorCodes } = require("../errorCodes");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case errorCodes.VALIDATION_ERROR:
            res.json({
                title: "Validation error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case errorCodes.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case errorCodes.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case errorCodes.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case errorCodes.SERVER_ERROR:
            res.json({
                title: "Server error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        default:
            res.json({
                title: "Unknown Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }
};

module.exports = errorHandler;
