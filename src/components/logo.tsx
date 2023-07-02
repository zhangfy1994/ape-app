import { Image } from "antd";
import logoSrc from "@/public/logo.avif";

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Image src={logoSrc} width={94} height={94} preview={false} />

      <h2>Bored Ape</h2>
    </div>
  );
};

export default Logo;
