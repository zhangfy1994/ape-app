import { Image, Modal } from "antd";
import React from "react";
import { NFT_OPERATES, ShowModal } from "./my/nft-operate";

type NFTCardProps = {
  uri: string;
  id: number | string;
  price?: string;
  isTokenId?: boolean;
  modalRef?: { current: any };
};
export const NFTCard: React.FC<NFTCardProps> = ({
  uri,
  id,
  price = "40 ETH",
  isTokenId = false,
  modalRef,
}) => {
  const transform = () => {
    modalRef?.current?.showModal?.({
      tokenId: id,
      uri,
      operation: NFT_OPERATES.Transfer,
      title: "转账",
    });
  };

  const approval = () => {
    modalRef?.current?.showModal?.({
      tokenId: id,
      uri,
      operation: NFT_OPERATES.Approval,
      title: "授权",
    });
  };

  return (
    <div className="nft-card">
      <Image
        src={uri}
        alt="nft"
        loading="lazy"
        preview={false}
        className="nft-img"
      />

      <div className="nft-card-info">
        <div style={{ fontWeight: "bold", paddingBottom: "10px" }}>
          {isTokenId ? "tokenID" : "索引ID"}: {id}
        </div>
        <div style={{ fontWeight: "bold" }}>价格: {price}</div>
      </div>

      {isTokenId ? (
        <div className="operates operates-show">
          <span
            style={{ marginRight: "10px" }}
            className="white-text"
            onClick={transform}
          >
            转账
          </span>
          <span
            className="white-text"
            style={{ marginRight: "10px" }}
            onClick={approval}
          >
            授权
          </span>
          <span className="white-text copy-uri" data-clipboard-text={uri}>
            复制
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default NFTCard;
