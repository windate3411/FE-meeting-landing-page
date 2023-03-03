import * as React from "react";
import ImageHeroWallLeft from "../../assets/desktop/image-hero-left.png";
import ImageHeroWallRight from "../../assets/desktop/image-hero-right.png";
import Download from "../download";

interface Props {}

const HeroWall: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className="grid justify-center grid-cols-2 md:grid-cols-3">
        <img
          src={ImageHeroWallLeft}
          alt="hero-wall-left"
          className="md:order-1 relative justify-self-start right-[16px] md:right-[32px]"
        />
        <img
          src={ImageHeroWallRight}
          alt="hero-wall-right"
          className="md:order-3 relative justify-self-end left-[16px] md:left-[32px]"
        />
        <Download className="md:order-2 md:col-span-1 mt-12" />
      </div>
    </>
  );
};

export default HeroWall;
