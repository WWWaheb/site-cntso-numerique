import { FC } from "react";
import Image from "next/image";
import DiscordLogo from "./discord-logo.png";
import SignalLogo from "./signal.png";

export enum Brand {
  DISCORD = "DISCORD",
  SIGNAL = "SIGNAL",
}

type Props = {
  brand: Brand;
  width: number;
  height: number;
};

const BrandIcon: FC<Props> = ({ brand, height = 50, width = 50 }) => {
  switch (brand) {
    case Brand.DISCORD:
      return (
        <Image
          src={DiscordLogo}
          alt="discord logo"
          height={height}
          width={width}
        />
      );
    case Brand.SIGNAL:
      return (
        <Image
          src={SignalLogo}
          alt="signal logo"
          height={height}
          width={width}
        />
      );
  }
};

export default BrandIcon;
