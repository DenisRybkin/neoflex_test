import { ICalcParams, IReqCalcParams } from '../interfaces/CalcParams';
import { ApiError } from '../exceptions/apiError';

const parseToFloat = (param?: string) : number => {
  const result = parseFloat(param);
  if (Number.isNaN(result)) throw ApiError.ValidationError();
  return result;
}

const validationForZero = (param: number): void => {
  if(param == 0) throw ApiError.ValidationError();
}

export const validationCalcParams = (params: IReqCalcParams, zeroIsDenied?: boolean): ICalcParams => {
  zeroIsDenied && Object.values(params).forEach(item => validationForZero(item));
  return {
    param1: parseToFloat(params.param1),
    param2: parseToFloat(params.param2)
  }
}