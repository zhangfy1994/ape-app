import { ConnectWallet } from "@thirdweb-dev/react";
import Logo from "./logo";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo />
      <ConnectWallet
        dropdownPosition={{
          align: "center",
          side: "bottom",
        }}
      />
    </div>
  );
};

export default Header;
