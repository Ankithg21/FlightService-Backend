const CrudRepository = require("./crud-repository.js");
const {Flight, Airplane, Airport, City} = require("../models");
const {Sequelize} = require("sequelize");

const db = require("../models");
const {addRowLockOnFlights} = require("./queries");

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }
    async getAllFlights(filters, sort){
        const response = await Flight.findAll({
            where: filters,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: "AirplaneDetail"
                },
                {
                    model: Airport,
                    required: true,
                    as: "DepartureAirport",
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("DepartureAirport.code"))
                    },
                    include: {
                        model: City,
                        required: true
                    }
                },
                {
                    model: Airport,
                    required: true,
                    as: "ArrivalAirport",
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("ArrivalAirport.code"))
                    },
                    include: {
                        model: City,
                        required: true
                    }
                }
            ]
        });
        return response;
    }

    async updateRemainingSeats(flightId, seats, dec=1){
        const transaction = await db.sequelize.transaction();
        try {
            await db.sequelize.query(addRowLockOnFlights(flightId));
            const flight = await Flight.findByPk(flightId);
            if(+dec){
                await flight.decrement('totalSeats', {by: seats}, {transaction: transaction});
            }
            else{
                await flight.increment('totalSeats', {by: seats}, {transaction: transaction});
            }
            await transaction.commit();
            return flight;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    };

};

module.exports = FlightRepository;