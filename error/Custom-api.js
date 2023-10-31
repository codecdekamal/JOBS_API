class CustumAPIError extends Error{
    constructor(message){
        super(message) 
    }
}
module.exports = CustumAPIError;