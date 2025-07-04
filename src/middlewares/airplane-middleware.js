const {StatusCodes} = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong while creating airplane.";
        ErrorResponse.error = new AppError(["Please provide airplane model number"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.capacity){
        ErrorResponse.message = "Something went wrong while creating airplane.";
        ErrorResponse.error = new AppError(["Please provide airplane capacity."], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

function validateUpdateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong while Updating airplane.";
        ErrorResponse.error = new AppError(["Please provide airplane model number"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.capacity){
        ErrorResponse.message = "Something went wrong while Updating airplane.";
        ErrorResponse.error = new AppError(["Please provide airplane capacity."], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

module.exports = {
    validateCreateRequest,
    validateUpdateRequest,
}