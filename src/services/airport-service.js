const { StatusCodes } = require("http-status-codes");
const {AirportRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('cannot create a new airplane object.', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(){
    try {
        const airport = await airportRepository.getAll();
        return airport;
    } catch (error) {
        throw new AppError("Cannot fetch data of all the Airports", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

async function getAirports(id){
    try {
        const airplane = await airportRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The Airport you requested is not present.", error.statusCode);
        }
        throw new AppError(`Cannot fetch the data for Airport id:${id}.`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id){
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The Airport you requested to Delete is not present.", error.statusCode);
        }
        throw new AppError("Failed to delete the Airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

async function updateAirport(id, data){
    try {
        const response = await airportRepository.update(id, data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The Airport you requested to Update is not present.", error.statusCode);
        }
        throw new AppError("Failed to update the Airport", StatusCodes.INTERNAL_SERVER_ERROR);   
    }
};

module.exports = {
    createAirport,
    getAirport,
    getAirports,
    destroyAirport,
    updateAirport,
}