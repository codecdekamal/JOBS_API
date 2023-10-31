const {CustumAPIError} = require("../error")
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err.statusCode === StatusCodes.UNAUTHORIZED) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else if (err.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Internal server error.',
    });
  } else {
    next(err);
  }
};
module.exports = errorHandlerMiddleware;