import { RequestHandler } from "express";
import { HttpTypes } from "../enums/httpTypes";

export interface RouteHandler {
    uri: string
    requestType: HttpTypes
    handler: RequestHandler
}