import { URIs } from '../../misc/uriKeys';
import { RouteHandler } from '../../../interfaces/RouteHandler';
import { HttpTypes } from '../../../enums/httpTypes';
import { calcService } from '../../../services/calcService';
import { validationCalcParams } from '../../../validation/validationCalcParams';
import { getCalcParams } from '../../../utils/getIdFromReq';

export const getSab: RouteHandler = {
  uri: URIs.calc.sab,
  requestType: HttpTypes.get,
  handler : (req,res,next) => {
    try {
      const result = calcService.getSab(validationCalcParams(getCalcParams(req)));
      res.json(result);
    } catch (e) {
      next(e)
    }
  }
}