const {AirplaneService} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {SuccessResponse, ErrorResponse} = require("../utils/common");

async function createAirplane(req, res){
    try {
        const airplane =await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.message = "Successfully create an Airplane";
        SuccessResponse.data = airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went while creating airplane";
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirplanes(req, res){
    try {
        const airplanes = await AirplaneService.getAirplane();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        Error.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

module.exports = {
    createAirplane,
    getAirplanes,
}