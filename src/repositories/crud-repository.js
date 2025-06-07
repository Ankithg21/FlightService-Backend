const { where } = require("sequelize");
const {Logger} = require("../config");

class CrudRepository{
    constructor(model){
        this.model = model;
    }
    
    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repository: create");
            throw error;
        }
    }
    
    async destroy(data){
        try {
            const response = await this.model.delete({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repository: Delete");
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repository: Get");
            throw error;            
        }
    }

    async getAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wron in Crud Repository: FindAll");
            throw error;
        }
    }

    async update(id, data){
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repository: Update");
            throw error;
        }
    }
};

module.exports = CrudRepository;
