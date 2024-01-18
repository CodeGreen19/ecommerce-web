import { Fragment } from "react";
import Navbar from "../navbar/Navbar";
import AutoText from "../home/AutoText";
import CarouselBox from "../carousel/CarouselBox";
import Trending from "./Trending";
import Footer from "../footer/Footer";
import Deal from "./Deal";
import Subscribe from "./Subscribe";
import FooterContent from "../footer/FooterContent";
import "../style/Home.css";
import Hero from "./Hero";

function Home() {
  return (
    <Fragment>
      <AutoText />
      <Navbar />
      <Hero />
      <h1 className="hero_title">Freature Products</h1>
      <Trending />
      <h2 className="hero_title">Trending Products</h2>
      <div className="md:px-[30px]">
        <CarouselBox />
      </div>

      <h2 className="hero_title">Exclusive Deals</h2>
      <Deal />
      <h2 className="hero_title">Recomended For You</h2>
      <div className="md:px-[30px]">
        <CarouselBox />
      </div>

      <h2 className="hero_title">Get Updates</h2>
      <Subscribe />
      <FooterContent />
      <Footer />
    </Fragment>
  );
}

export default Home;
