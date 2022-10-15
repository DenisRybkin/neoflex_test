import {getSab,getDiv,getSum,getMul} from "./calc"

const CalcRouteHandlers = [getMul,getSum,getDiv,getSab];

export const routeHandlers = [...CalcRouteHandlers];