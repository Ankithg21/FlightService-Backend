const {StatusCodes} = require("http-status-codes");

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json(
            {
                success: false,
                message: "Something went wrong while creating airplane.",
                data: {},
                error: {
                    Explanation: "Please provide airplane model number."
                },
            }
        );
    }
    if(!req.body.capacity){
        res.status(StatusCodes.BAD_REQUEST).json(
            {
                success: false,
                message: "Something went wrong while creating airplane.",
                data: {},
                error: {
                    Explanation: "Please provide airplane capacity."
                },
            }
        );
    }
    next();
};

module.exports = {
    validateCreateRequest,
}