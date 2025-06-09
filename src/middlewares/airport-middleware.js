const {StatusCodes} = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponse.message = "Something went wrong while creating airport.";
        ErrorResponse.error = new AppError(["Please provide Airport name"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = "Something went wrong while creating airport.";
        ErrorResponse.error = new AppError(["Please provide airport Code."], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.city_Id){
        ErrorResponse.message = "Something went wrong while creating airport.";
        ErrorResponse.error = new AppError(["Please provide City ID."], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

module.exports = {
    validateCreateRequest,
}