import BigNumber from "bignumber.js";

export function bigNum2Num(param: unknown): any {
  if (BigNumber.isBigNumber(param)) {
    return param.toNumber();
  } else {
    return param;
  }
}
