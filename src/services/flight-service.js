const { StatusCodes } = require("http-status-codes");
const {FlightRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");
const {Op} = require("sequelize");

const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('cannot create a new flight object.', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query){
    let customFilter = {};
    let sortFilter = [];
    if(query.trips){
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        if(departureAirportId == arrivalAirportId){
            throw new AppError("Departure and Arrival loccations are same.", StatusCodes.BAD_REQUEST);
        }
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
    }
    if(query.price){
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice == undefined)? 20000 : maxPrice)]
        }
    }
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    if(query.tripDate){
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + "23:59:00"]
        }
    }
    if(query.sort){
        const params = query.sort.split(",");
        const sortFilters = params.map((param)=> param.split("_"));
        sortFilter = sortFilters;
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppError(`Cannot fetch the data for requested Flights - Flights NOT FOUND`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

async function getFlight(id){
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The flight you requested is not present", error.statusCode);
        }
        throw new AppError("Cannot fetch the data of requested flight.", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

async function updateSeats(data){
    try {
        const response = await flightRepository.updateRemainingSeats(data.flightId, data.seats, data.dec);
        return response;
    } catch (error) {
        throw new AppError("Cannot Update the Seats", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

module.exports = {
    createFlight, 
    getAllFlights,
    getFlight,
    updateSeats,
}