import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Menubar from "../navbar/Menubar";
import FooterContent from "../footer/FooterContent";
import Footer from "../footer/Footer";
import AutoText from "../home/AutoText";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../../redux/actions/product";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { shoeSizes } from "../utils/Items";
import { Rating } from "@mui/material";
import { cart } from "../icons/icons";
import CarouselBox from ".././carousel/CarouselBox";
import toast from "react-hot-toast";

function ProductDetail() {
  const dispatch = useDispatch();
  const { singleProduct: product } = useSelector((state) => state.product);
  const [previewImg, setPreviewImg] = useState("");
  const { id } = useParams();
  const sizes = shoeSizes;

  product &&
    product.stock.forEach((stock) => {
      sizes.forEach((s, i) => {
        if (s.size === stock.size.toString()) {
          sizes[i].exist = true;
        }
      });
    });

  console.log("working", sizes);

  // to show first images
  const firstImg = product && product.images[0].url;

  // add to bag
  const addToBag = () => {
    toast.success("product added to bag");
  };
  useEffect(() => {
    dispatch(singleProduct(id)).then(() => {
      setPreviewImg(firstImg);
    });

    // eslint-disable-next-line
  }, [dispatch, id, firstImg]);
  return (
    <Fragment>
      <AutoText />
      <Navbar />
      <Menubar />
      {product && (
        <div className="flex flex-col  md:flex-row">
          <div className="bottom-0 top-[-20vh] h-full w-full md:w-1/2 xl:sticky">
            <div className="">
              <img src={previewImg} className=" w-full" alt="productMainImg" />
            </div>
            <div className="my-2 flex h-[80px] gap-1 overflow-scroll ">
              {product.images.map((img) => (
                <img
                  className=" h-full cursor-pointer"
                  src={img.url}
                  alt="productImg"
                  onMouseEnter={() => setPreviewImg(img.url)}
                />
              ))}
            </div>
          </div>
          <div className="w-full p-[20px] md:w-1/2">
            <h2>
              <LocalFireDepartmentIcon />
              <span>1,531 purchased in the last 7 days</span>
            </h2>
            <h1 className="text-[30px]">{product.name}</h1>
            <h2 className="text-[25px]">${product.price}</h2>
            <div className="mt-5 flex items-center">
              <Rating
                name="simple-controlled"
                size="medium"
                value={4.3}
                precision={0.1}
                readOnly
              />{" "}
              <span className="">(4.3)</span>
            </div>
            <div className="mt-10">
              <h2 className="my-2 text-[1.1rem]">Select Size</h2>
              <div className="flex flex-wrap gap-1">
                {sizes.map((item) => (
                  <div
                    className={`flex h-[60px] w-[60px] items-center justify-center border-[1px] border-[#00000068] `}
                    style={
                      item.exist
                        ? {
                            opacity: "1",
                            backgroundColor: "whitesmoke",
                            cursor: "pointer",
                          }
                        : { opacity: "0.5", cursor: "not-allowed" }
                    }
                  >
                    {item.size}
                  </div>
                ))}
              </div>
            </div>
            <button
              className="my-3 flex items-center border-[1px] border-[black] bg-[#3a3a3a] p-3 px-6 text-[1.2rem] tracking-[1px] text-white"
              onClick={addToBag}
            >
              Add To Bag <span className="mx-1">{cart}</span>
            </button>
            <p className="py-5 tracking-[1px]">{product.description}</p>
            <div>
              <h2 className="text-[1.2rem]">reviews & ratings</h2>
            </div>
          </div>
        </div>
      )}
      <div className="my-4">
        <h2 className=" m-4 my-8 text-[1.6rem]">You Might also like</h2>
        <CarouselBox />
      </div>
      <FooterContent />
      <Footer />
    </Fragment>
  );
}

export default ProductDetail;
