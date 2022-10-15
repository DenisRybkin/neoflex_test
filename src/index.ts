import express, { Application } from "express"
import { routeHandlers } from "./routesHandlers";
import { HttpTypes } from "./enums/httpTypes";
import { RouteHandler } from "./interfaces/RouteHandler";
import {config} from "./config";
import { HandlerErrorMiddleware } from './middlewares/handlerErrorMiddleware';

export class App {
    private static _instance: App;
    private _app: Application;

    constructor
    (
        private readonly _port: number = config.PORT,
        private readonly _prefix: string = config.API_PREFIX
    )
    {
        this._app = express();
        this.initMiddthlewares();
        this.initRoutes();
    }

    public static get Instance(): App {
        return this._instance || (this._instance = new this());
    };

    private initMiddthlewares(): void {
        this._app.use(HandlerErrorMiddleware);
    }

    private get getRouteHandlerMapper(): Partial<Record<HttpTypes, (v: RouteHandler) => void>> {
        return {
            [HttpTypes.get]: (handler) => this._app.get(handler.uri, handler.handler),
            [HttpTypes.post]: (handler) => this._app.post(handler.uri, handler.handler),
            [HttpTypes.post]: (handler) => this._app.put(handler.uri, handler.handler),
            [HttpTypes.patch]: (handler) => this._app.patch(handler.uri, handler.handler),
            [HttpTypes.delete]: (handler) => this._app.delete(handler.uri, handler.handler),
        }
    }

    private initRoutes (): void {
        routeHandlers.forEach(item => this.getRouteHandlerMapper[item.requestType](item))
    }

    public async init(): Promise<void> {
        this._app.listen(this._port, async () => {
            console.log(`server started at http://localhost:${ this._port }`);
        })
    };
};

const app = App.Instance;
app.init();