import * as React from "react";
import NFTCard from "../nft-card";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../const/contract";
import { getRandomURI } from "../../utils/random";
import { useMyContractWrite, useMyOwnedNFTs } from "../../hooks/useMyContract";
import { showError, showReceipt } from "../../utils/receipt";

type CardsProps = {
  address: string;
  modalRef: { current: any };
};
const MyNFT: React.FC<CardsProps> = ({ address, modalRef }) => {
  // my nfts
  const { data: myNFTS } = useMyOwnedNFTs(address);

  // mint
  const { mutateAsync } = useMyContractWrite("mintApe");

  const mintApe = async () => {
    const uri = getRandomURI();
    mutateAsync({ args: [uri] })
      .then((res) => {
        console.log("res.receipt", res.receipt);

        showReceipt(res.receipt, "铸造成功，去查看NFT并尝试交易吧！");
      })
      .catch((err) => {
        showError("铸造失败", err.message);
      });
  };

  return (
    <div className="nfts-container">
      {myNFTS?.map((nft) => (
        <NFTCard
          key={nft.metadata.id}
          uri={nft.metadata.uri}
          id={nft.metadata.id}
          isTokenId
          modalRef={modalRef}
        />
      ))}

      {((Array.isArray(myNFTS) && myNFTS.length === 0) ||
        address === "0x483195FE71Ec4B430C8544BEa353c1d5c710e2e2") && (
        <div>
          <div style={{ marginBottom: "10px" }}>你还没有NFT，赶紧铸造吧!</div>
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={mintApe}
            theme="light"
          >
            铸造 NFT
          </Web3Button>
        </div>
      )}
    </div>
  );
};
export default MyNFT;
