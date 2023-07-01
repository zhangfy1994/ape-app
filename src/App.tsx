import "./styles/home.css";
import Header from "./components/header";
import AllNFTs from "./components/all-nfts";
import MyNFT from "./components/my/index";
import BaseInfo from "./components/base-info";
import { useClipboardJS, useListenMetaMaskError } from "./hooks/useGlobalEvent";

export default function Home() {
  useClipboardJS(".copy-uri");
  useListenMetaMaskError();

  return (
    <div className="container">
      <Header />
      <BaseInfo />
      <MyNFT />
      <AllNFTs />
    </div>
  );
}
