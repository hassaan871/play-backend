const asyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                error_code: error.code || "No Error Code",
                message: error.message || "Internal server error"
            });
        }
    }
}

/*********** Approach 02 ************/
/*
const asyncHandler = (requestHandler) => { 
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err));
    }
}
*/


/*********** Approach 03 ************/
/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}
*/

export { asyncHandler }