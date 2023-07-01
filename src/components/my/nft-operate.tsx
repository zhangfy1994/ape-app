import { Input, InputRef, Modal, message } from "antd";
import * as React from "react";
import { ethers } from "ethers";
import { useAddress } from "@thirdweb-dev/react";
import { useMyContractWrite } from "../../hooks/useMyContract";
import { showError, showReceipt } from "../../utils/receipt";

export type ShowConfig = {
  tokenId: number | string;
  uri?: string;
  operation: NFT_OPERATES;
  title?: string;
};
export type ShowModal = (config: ShowConfig) => void;
export type RefObject = {
  showModal: ShowModal;
};

const NFTOperate = React.forwardRef<RefObject>((_props, ref) => {
  const [visible, setVisible] = React.useState(false);
  const inputRef = React.useRef<InputRef>(null);
  const [config, setConfig] = React.useState<ShowConfig | null>(null);

  const address = useAddress();
  // transform
  const { mutateAsync: safeTransferFrom, isLoading: transferLoading } =
    useMyContractWrite("safeTransferFrom");
  // approval
  const { mutateAsync: approve, isLoading: approveLoading } =
    useMyContractWrite("approve");

  const showModal = (config: ShowConfig) => {
    setVisible(true);
    setConfig(config);
  };

  // 重置modal
  const resetModal = () => {
    setVisible(false);
    setConfig(null);
  };
  const closeModal = () => {
    resetModal();
  };

  React.useImperativeHandle(ref, () => ({
    showModal,
  }));

  const handleOk = () => {
    const toAddress = inputRef.current?.input?.value;
    if (toAddress && ethers.utils.isAddress(toAddress) && config?.tokenId) {
      if (config?.operation === NFT_OPERATES.Transfer) {
        safeTransferFrom({ args: [address, toAddress, config.tokenId] })
          .then((res) => {
            showReceipt(res.receipt, "转账成功");
            resetModal();
          })
          .catch((err) => {
            showError("转账失败", err.message);
          });
      } else if (config?.operation === NFT_OPERATES.Approval) {
        approve({ args: [toAddress, config.tokenId] })
          .then((res) => {
            showReceipt(res.receipt, "授权成功");
            resetModal();
          })
          .catch((err) => {
            showError("授权失败", err.message);
          });
      }
    } else {
      message.error("请输入合法的地址");
    }
  };

  return (
    <Modal
      open={visible}
      onCancel={closeModal}
      title={config?.title}
      destroyOnClose
      onOk={handleOk}
      okButtonProps={{ loading: transferLoading || approveLoading }}
    >
      <div style={{ padding: "20px 0" }}>
        地址： <Input style={{ width: "90%" }} ref={inputRef} allowClear />
      </div>
    </Modal>
  );
});

export enum NFT_OPERATES {
  Transfer = "Transfer",
  Approval = "approval",
}

export default NFTOperate;
