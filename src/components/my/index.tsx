import { useAddress } from "@thirdweb-dev/react";

import MyNFT from "./nft";
import NFTOperate, { RefObject } from "./nft-operate";
import React from "react";

export const My: React.FC = () => {
  const address = useAddress();

  const modalRef = React.useRef<RefObject>({ showModal: () => {} });

  return (
    <div className="my-nft">
      <h4>我的 Ape NFT</h4>

      {!address ? (
        <div style={{ padding: "0 16px" }}>
          点击右上方按钮，连接钱包以解锁更多功能
        </div>
      ) : null}

      {address ? <MyNFT address={address} modalRef={modalRef} /> : null}

      {address ? <NFTOperate ref={modalRef} /> : null}
    </div>
  );
};

export default My;
