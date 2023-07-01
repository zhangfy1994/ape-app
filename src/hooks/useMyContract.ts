import {
  useContract,
  useContractEvents,
  useContractRead,
  useContractWrite,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { APE_ABI } from "../const/abi";
import { CONTRACT_ADDRESS } from "../const/contract";

// useContract
export function useMyContract() {
  return useContract(CONTRACT_ADDRESS, APE_ABI);
}

// useContractRead
type RestContractReadParams = Parameters<typeof useContractRead> extends [
  any,
  any,
  ...infer Rest
]
  ? Rest
  : never;
export function useMyContractRead(
  functionName: string,
  ...params: RestContractReadParams
) {
  const { contract } = useMyContract();
  return useContractRead(contract, functionName, params);
}

// useContractWrite
export function useMyContractWrite(functionName: string) {
  const { contract } = useMyContract();
  return useContractWrite(contract, functionName);
}

// useContractEvents
type RestContractEventsParams = Parameters<typeof useContractEvents> extends [
  any,
  ...infer Rest
]
  ? Rest
  : never;
export function useMyContractEvents(...params: RestContractEventsParams) {
  const { contract } = useMyContract();
  return useContractEvents(contract, ...params);
}

// useOwnedNFTs
const defaultData = {};
export function useMyOwnedNFTs(address?: string) {
  const { contract } = useMyContract();
  return useOwnedNFTs(contract, address);
}
