const CustumAPIError = require("./Custom-api");
const {StatusCodes} = require("http-status-codes");
class BadRequest extends CustumAPIError {
       constructor(message){
          super(message)
          this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest;