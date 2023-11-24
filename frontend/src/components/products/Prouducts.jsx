import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../redux/actions/product";
import Card from "../utils/Card";
import Loading from "../loading/Loading";
import FooterContent from "../footer/FooterContent";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import AutoText from "../home/AutoText";
import Search from "./Search";
import CloseIcon from "@mui/icons-material/Close";
import "../style/Product.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EqualizerIcon from "@mui/icons-material/Equalizer";

import Filter from "./Filter";

function Prouducts() {
  const { allProducts, loading } = useSelector((state) => state.product);
  const [showFilter, setShowFilter] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProduct());
  }, [dispatch]);
  return (
    <Fragment>
      <AutoText />
      <Navbar />
      <Search />
      <button
        className="open_filter_btn m-2 border-[1px] border-[#41414126] bg-[whitesmoke] p-1 px-2 outline-none  xl:hidden"
        onClick={() => setShowFilter(!showFilter)}
      >
        Filter <EqualizerIcon />
      </button>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative flex w-full">
          <div
            className={`product_filter_box ${
              !showFilter && "add"
            } fixed left-0 top-0 z-[40] h-screen w-[85%] overflow-x-visible overflow-y-scroll p-4 pt-8 sm:w-[40%] md:w-[30%] xl:sticky xl:top-[2rem] xl:z-[20] xl:w-[20%]  xl:pt-4`}
          >
            <Filter />
            <button
              className=" absolute right-0 top-[50%] border-[1px] border-[#252525] bg-[white] p-1 xl:hidden"
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? <CloseIcon /> : <KeyboardArrowRightIcon />}
            </button>
          </div>
          <div className="flex w-full justify-center  xl:w-[80%] ">
            <div className="flex  w-[full] flex-wrap  justify-center md:m-1 md:gap-2">
              {allProducts &&
                allProducts.map((product) => <Card product={product} />)}
            </div>
          </div>
        </div>
      )}
      <FooterContent />
      <Footer />
    </Fragment>
  );
}

export default Prouducts;
