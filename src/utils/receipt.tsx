import { Modal } from "antd";
import { ethers } from "ethers";
import { gwei2eth } from "./wei-eth";

export function showReceipt(
  from: string,
  to: string,
  receipt: ethers.providers.TransactionReceipt,
  title: string
) {
  if (receipt) {
    Modal.info({
      title,
      width: "500px",
      content: (
        <>
          <p>源地址: {from}</p>
          <p>目标地址: {to}</p>
          <p>燃料费: {gwei2eth(receipt.gasUsed)} ETH</p>
          <p>交易哈希: {receipt.transactionHash}</p>
          <p>区块高度: {receipt.blockNumber}</p>
        </>
      ),
    });
  }
}

export function showError(title: string, content: string) {
  Modal.error({
    title,
    content,
    width: "500px",
  });
}
