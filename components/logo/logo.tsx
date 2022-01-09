import { FC } from "react";
import Image from "next/image";
import logo from "./logo-numerique.png";
type Props = {
  width?: number;
  heigth?: number;
};

const Logo: FC<Props> = ({ width = 250, heigth = 250 }) => {
  return (
    <Image
      src={logo}
      width={width}
      height={heigth}
      alt="logo métiers du numérique"
      className="h-2 w-auto sm:h-10"
    />
  );
};

export default Logo;
