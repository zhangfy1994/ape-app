import "./styles/home.css";
import Header from "./components/header";
import AllNFTs from "./components/all-nfts";
import MyNFT from "./components/my/index";
import BaseInfo from "./components/base-info";
import { GlobalLoadingContext, useClipboardJS } from "./hooks/useGlobalEvent";
import LoadingModal from "./components/loading";
import React from "react";

export default function Home() {
  useClipboardJS(".copy-uri");
  const loadingRef = React.useRef(null);

  return (
    <GlobalLoadingContext.Provider value={loadingRef}>
      <div className="container">
        <Header />
        <BaseInfo />
        <MyNFT />
        <AllNFTs />
        <LoadingModal ref={loadingRef} />
      </div>
    </GlobalLoadingContext.Provider>
  );
}
