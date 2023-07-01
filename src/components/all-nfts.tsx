import { ALL_NFT_URIS } from "../const/nfts";
import NFTCard from "./nft-card";

export const AllNFTs: React.FC = () => {
  return (
    <div className="all-nfts">
      <h4>所有 Ape NFT</h4>
      <div className="nfts-container">
        {ALL_NFT_URIS.map((uri, index) => (
          <NFTCard key={uri} uri={uri} id={index} />
        ))}
      </div>
    </div>
  );
};

export default AllNFTs;
