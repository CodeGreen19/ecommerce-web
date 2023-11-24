import { Fragment, useEffect } from "react";
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
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Fragment>
      <AutoText />
      <Navbar />
      <Hero />
      <h2 className="hero_title">New Products</h2>
      <CarouselBox />
      <h1 className="hero_title">
        explore trending <br /> collection
      </h1>
      <Trending />
      <h2 className="hero_title">feature Products</h2>
      <CarouselBox />
      <h2 className="hero_title">exclusive deals</h2>
      <Deal />
      <h2 className="hero_title">recommended for you</h2>
      <CarouselBox />
      <h2 className="hero_title">Get Updates</h2>
      <Subscribe />
      <FooterContent />
      <Footer />
    </Fragment>
  );
}

export default Home;
