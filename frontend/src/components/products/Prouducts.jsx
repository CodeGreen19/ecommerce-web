import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredProduct } from "../../redux/actions/product";
import Card from "../utils/Card";
import FooterContent from "../footer/FooterContent";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import AutoText from "../home/AutoText";
import Search from "./Search";
import CloseIcon from "@mui/icons-material/Close";
import "../style/Product.css";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import sad from "../image/sad.svg";

import Filter from "./Filter";
import { filterData } from "../utils/ProductUtils";
import ProductLoading from "../loading/ProductLoading";

function Prouducts() {
  const {
    filteredProducts: allProducts,
    loading,
    givenCategory,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");

  const searchHandler = () => {
    filterData.keyword = searchTxt;
    setSearchTxt("");
    dispatch(filteredProduct(filterData));
  };

  useEffect(() => {
    if (!givenCategory) {
      dispatch(filteredProduct(filterData));
    }
    // eslint-disable-next-line
  }, [dispatch, givenCategory]);
  return (
    <Fragment>
      <AutoText />
      <Navbar mobileSearchOption={true} />
      <Search
        searchTxt={searchTxt}
        setSearchTxt={setSearchTxt}
        searchHandler={searchHandler}
      />
      <button
        className="open_filter_btn m-2 border-[1px] border-[#41414126] bg-[whitesmoke] p-1 px-2 outline-none  xl:hidden"
        onClick={() => setShowFilter(!showFilter)}
      >
        <KeyboardBackspaceRoundedIcon /> Filters
      </button>

      <div className="relative flex w-full">
        <div
          className={`product_filter_box ${
            !showFilter && "add"
          } fixed left-0 top-0 z-[40] h-screen w-[85%] overflow-x-visible overflow-y-scroll p-4 pt-8 sm:w-[40%] md:w-[30%] xl:sticky xl:top-[2rem] xl:z-[20] xl:w-[20%]  xl:pt-4`}
        >
          <Filter />
        </div>
        {showFilter && (
          <button
            className=" b_1 fixed right-[15%] top-1/2 z-[41] bg-[white] p-1 transition-all sm:right-[70%] xl:hidden"
            onClick={() => setShowFilter(!showFilter)}
          >
            <CloseIcon />
          </button>
        )}
        <div className="min-h-screen w-full xl:w-[80%]">
          <div className="relative flex    justify-center">
            {loading && <ProductLoading />}
            <div className="flex   w-full flex-wrap items-start justify-start md:m-4 md:gap-2">
              {allProducts &&
                allProducts.map((product) => <Card product={product} />)}
              {allProducts && allProducts.length === 0 && (
                <div className="flex h-[80vh] w-full items-center justify-center">
                  <div className="flex flex-col  items-center justify-center">
                    <img className="m-3 w-[50px]" src={sad} alt="sad" />
                    <h3>Insufficient Products....</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterContent />
      <Footer />
    </Fragment>
  );
}

export default Prouducts;
