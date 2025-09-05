class ApiResponse {
    constructor(status, message = "Success", data, statusCode ,) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.success = statusCode < 400 ? true : false;
        this.statusCode = statusCode;
    }
} 