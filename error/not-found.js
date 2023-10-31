const {StatusCodes} = require("http-status-codes");
const CustumAPIError = require("./Custom-api");
class NotFound extends CustumAPIError{
    constructor(message){
        super(message)
      this.message = StatusCodes.NOT_FOUND
    }
}
module.exports = NotFound;