const {StatusCodes} = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common");

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong while creating airplane.";
        ErrorResponse.error = {Explanation: "Please provide airplane model number."}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.capacity){
        ErrorResponse.message = "Something went wrong while creating airplane.";
        ErrorResponse.error = {Explanation: "Please provide airplane capacity."}
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

module.exports = {
    validateCreateRequest,
}