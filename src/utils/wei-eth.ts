import { ethers } from "ethers";
import BigNumber from "bignumber.js";

export function wei2eth(wei: ethers.BigNumberish): string {
  if (BigNumber.isBigNumber(wei)) {
    return ethers.utils.formatEther(wei);
  }

  return wei as string;
}

export function gwei2eth(gwei: ethers.BigNumberish): string {
  return ethers.utils.formatUnits(gwei, "gwei");
}

export function eth2wei(eth: ethers.BigNumberish | number | string) {
  if (
    BigNumber.isBigNumber(eth) ||
    typeof eth === "number" ||
    typeof eth === "string"
  ) {
    return ethers.utils.parseEther(eth.toString());
  }

  return eth;
}
