export class ApiError extends Error {
    status: number;
    errors?: Error[];

    constructor(status : number, message : string, errors : Error[] = []) {
        super(message);
        this.status = status;
        this.errors = errors
    }

    static UnauthorizedError () {
        return new ApiError(401, "User is not unauthorized" );
    }

    static ValidationError () {
        return new ApiError(400, "Validation error")
    }

    static BadRequest( message : string, errors ?: Error[]) {
        return new ApiError(400, message, errors )
    }

    static Forbidden() {
        return new ApiError(403,"Not enough rights")
    }

    static NotFound () {
        return new ApiError(404, "Nothing was found" );
    }
}