class ApiError extends Error {
    constructor(statusCode,
        errors =[],
        message = "something went wrong", 
        stack = "",
        code,
    ) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        this.stack = stack;
        this.errors = errors;
        this.success = false;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;