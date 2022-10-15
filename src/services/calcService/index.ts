import { CalcParamsDto } from '../../routesHandlers/calc/dto/calcParamsDto';

class CalcService {

  getSum(params: CalcParamsDto): number {
    return params.param1 + params.param2;
  };

  getSab(params: CalcParamsDto): number {
    return params.param1 + params.param2;
  };

  getMul(params: CalcParamsDto): number {
    return params.param1 * params.param2;
  };

  getDiv(params: CalcParamsDto): number {
    return params.param1 / params.param2;
  };

}

export const calcService = new CalcService();