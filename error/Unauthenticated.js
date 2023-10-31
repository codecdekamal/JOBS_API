const CustumAPIError = require("./Custom-api");
const {StatusCodes} =   require("http-status-codes")
class UnAuthenticated extends CustumAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}
module.exports = UnAuthenticated;