import ClipboardJS from "clipboard";
import * as React from "react";
import { message } from "antd";
import { ethers } from "ethers";

// 复制图片uri
export function useClipboardJS(
  selector: string | Element | NodeListOf<Element>
) {
  React.useEffect(() => {
    let clipboard = new ClipboardJS(selector);
    clipboard.on("success", (e) => {
      e.clearSelection();
      message.success("成功复制图片地址，快去分享吧!");
    });
    clipboard.on("error", (e) => {
      message.error("复制失败，再试试吧!");
    });

    return () => {
      clipboard.destroy();
      clipboard = null as any;
    };
  }, []);
}

// 全局监听metaMask错误，其他钱包错误后续处理
export function useListenMetaMaskError() {
  React.useEffect(() => {
    function handleMetaMaskError(error: any) {
      console.error("MetaMask error:", error);
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.on("error", handleMetaMaskError);

    return () => {
      provider.off("error", handleMetaMaskError);
    };
  }, []);
}
