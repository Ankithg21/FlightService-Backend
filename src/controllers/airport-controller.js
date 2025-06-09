const {AirportService} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {SuccessResponse, ErrorResponse} = require("../utils/common");

async function createAirport(req, res){
    try {
        const airport =await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            city_Id: req.body.city_Id
        });
        SuccessResponse.message = "Successfully create an airport";
        SuccessResponse.data = airport
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went while creating airport";
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirports(req, res){
    try {
        const airport = await AirportService.getAirports();
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        Error.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

async function getAirport(req, res){
    try {
        const Airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = Airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

async function destroyAirport(req, res){
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

async function updateAirport(req, res){
    try {
        const id = req.params.id;
        const response = await AirportService.updateAirport(id, req.body);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport,
}