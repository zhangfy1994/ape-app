import { message } from "antd";
import { activeChain } from "../main";

export function checkChain(chain: any) {
  const isCorrectChain = chain.chainId === activeChain;
  if (!isCorrectChain) {
    message.error(
      `切换到${chain?.title || "Polygon Testnet Mumbai"}链，再操作吧!`
    );
  }
  return isCorrectChain;
}
