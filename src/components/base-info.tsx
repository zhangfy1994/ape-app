import { useMyContractRead } from "../hooks/useMyContract";
import { bigNum2Num } from "../utils/bigNum2Num";
import { wei2eth } from "../utils/wei-eth";

export const BaseInfo: React.FC = () => {
  const { data: MAX_APES } = useMyContractRead("MAX_APES");
  const { data: apePrice } = useMyContractRead("apePrice");
  const { data: totalSupply } = useMyContractRead("totalSupply");
  const { data: MAX_HOLDS } = useMyContractRead("MAX_HOLDS");

  return (
    <div className="base-info-container">
      <h4>Ape NFT 信息</h4>

      <div className="base-info">
        <div>总供应量: {MAX_APES ? bigNum2Num(MAX_APES) : null}</div>
        <div>已铸造量: {apePrice ? bigNum2Num(totalSupply) : null}</div>
        <div>铸造价格: {apePrice ? wei2eth(apePrice) : null} ETH</div>
        <div>铸造限制量: {apePrice ? bigNum2Num(MAX_HOLDS) : null}</div>
      </div>
    </div>
  );
};

export default BaseInfo;
