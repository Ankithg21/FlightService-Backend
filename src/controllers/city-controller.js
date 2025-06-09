const {CityService} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {SuccessResponse, ErrorResponse} = require("../utils/common");

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

module.exports = {
    createCity
};