import * as React from "react";
import NFTCard from "../nft-card";
import { Web3Button, useChain } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../const/contract";
import { getRandomURI } from "../../utils/random";
import {
  useMyContractWrite,
  useMyOwnedNFTs,
  useMyContractRead,
} from "../../hooks/useMyContract";
import { showError, showReceipt } from "../../utils/receipt";
import { useSetGlobalLoading } from "../../hooks/useGlobalEvent";
import { bigNum2Num } from "../../utils/bigNum2Num";
import { checkChain } from "../../utils/chain";

type CardsProps = {
  address: string;
  modalRef: { current: any };
};
const MyNFT: React.FC<CardsProps> = ({ address, modalRef }) => {
  // my nfts
  const { data: myNFTS } = useMyOwnedNFTs(address);

  // mint
  const { mutateAsync, isLoading: mintLoading } = useMyContractWrite("mintApe");
  useSetGlobalLoading(mintLoading);

  const { data: MAX_HOLDS } = useMyContractRead("MAX_HOLDS");

  const chain = useChain();

  const mintApe = async () => {
    if (checkChain(chain)) {
      const uri = getRandomURI();
      mutateAsync({ args: [uri] })
        .then((res) => {
          showReceipt(
            "0x000000000000000000000000000000000000000000",
            address,
            res.receipt,
            "铸造成功，去查看NFT并尝试交易吧！"
          );
        })
        .catch((err) => {
          showError("铸造失败", err.message);
        });
    }
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

      {((Array.isArray(myNFTS) && myNFTS.length < bigNum2Num(MAX_HOLDS)) ||
        address === "0x483195FE71Ec4B430C8544BEa353c1d5c710e2e2") && (
        <div style={{ padding: "0 16px" }}>
          {myNFTS?.length === 0 ? (
            <div style={{ marginBottom: "10px", width: "200px" }}>
              你还没有NFT，赶紧铸造吧!
            </div>
          ) : null}
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
