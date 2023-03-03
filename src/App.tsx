import { useState } from "react";
import "./App.css";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import HeroWall from "./components/hero-wall/HeroWall";
import SectionTile from "./components/section-tile/SectionTile";

function App() {
  return (
    <div className="">
      <Header />
      <HeroWall />
      <SectionTile number={1} containerClassName="py-[64px]" />
      <Gallery />
      <Description />
      <SectionTile number={2} containerClassName="relative top-[28px] z-10" />
      <Footer />
    </div>
  );
}

export default App;
