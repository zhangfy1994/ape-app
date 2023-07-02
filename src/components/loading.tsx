import { Modal, Spin } from "antd";
import * as React from "react";

const LoadingModal = React.forwardRef((_props, ref) => {
  const [open, setOpenInternal] = React.useState(false);

  const setOpen = (open: boolean) => {
    setOpenInternal(open);
  };
  React.useImperativeHandle(ref, () => ({
    setOpen,
  }));
  return (
    <Modal open={open} footer={null} onCancel={() => setOpenInternal(false)}>
      <div className="loading">
        <div>预计交易几秒后完成，请稍等</div>
        <div style={{ padding: "20px 0" }}>
          也可关闭本页面，等交易完成后会自动提示并刷新页面
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Spin />
      </div>
    </Modal>
  );
});
export default LoadingModal;
