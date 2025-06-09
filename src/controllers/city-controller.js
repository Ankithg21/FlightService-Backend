const {CityService} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {SuccessResponse, ErrorResponse} = require("../utils/common");

// POST /api/v1/cities
async function createCity(req, res){
    try {
        const city =await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.message = "Successfully created a City";
        SuccessResponse.data = city
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went while creating City";
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destroyCity(req, res){
    try {
        const response = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

async function updateCity(req, res){
    try {
        const id = req.params.id;
        const data = req.body;
        const response = await CityService.updateCity(id, data);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

module.exports = {
    createCity,
    destroyCity,
    updateCity,
};

