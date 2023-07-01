import { Image } from "antd";

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Image
        src="/src/public/logo.avif"
        width={94}
        height={94}
        preview={false}
      />

      <h2>Bored Ape</h2>
    </div>
  );
};

export default Logo;
