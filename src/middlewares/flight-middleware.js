const {StatusCodes} = require("http-status-codes");
const {ErrorResponse, SuccessResponse} = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next){
    if(!req.body.flightNumber){
        ErrorResponse.message = "Something went wrong while creating Flight.";
        ErrorResponse.error = new AppError(["Please provide Flight Number"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = "Something went wrong while creating Flight.";
        ErrorResponse.error = new AppError(["Please provide airplane Id."], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = "Something went wrong while creating Flight.";
        ErrorResponse.error = new AppError(["Please provide departure Airport Id"], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = "Something went wrong while creating Flight.";
        ErrorResponse.error = new AppError(["Please provide arrival Airport Id"], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message = "Something went wrong while creating Flight.";
        ErrorResponse.error = new AppError(["Please provide arrival Time."], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message = "Something went wrong while creating Flight.";
        ErrorResponse.error = new AppError(["Please provide departure Time"], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message = "Something went wrong while creating Flight.";
        ErrorResponse.error = new AppError(["Please provide price"], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = "Something went wrong while creating Flight.";
        ErrorResponse.error = new AppError(["Please provide total Seats"], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

module.exports = {
    validateCreateRequest,
}