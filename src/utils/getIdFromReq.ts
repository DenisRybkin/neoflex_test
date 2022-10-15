import { Request } from "express";
import { IReqCalcParams } from '../interfaces/CalcParams';

export const getCalcParams = (req : Request): IReqCalcParams => ({
  param1: req.params.param1,
  param2: req.params.param2
})