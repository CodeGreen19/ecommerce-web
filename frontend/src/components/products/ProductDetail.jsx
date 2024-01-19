import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Menubar from "../navbar/Menubar";
import FooterContent from "../footer/FooterContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Footer from "../footer/Footer";
import AutoText from "../home/AutoText";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailProduct, giveReviews } from "../../redux/actions/product";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { shoeSizes } from "../utils/Items";
import { Rating } from "@mui/material";
import { cart } from "../icons/icons";
import CarouselBox from ".././carousel/CarouselBox";

import Loading from "../loading/ProductLoading";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Reviews from "./Reviews";
import { addToBagAction, getCartAction } from "../../redux/actions/cart";
import { favouriteAction, loadUser } from "../../redux/actions/user";

function ProductDetail() {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.productDetail);
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const { loading: cartLoading } = useSelector((state) => state.cart);
  const { id } = useParams();
  const sizes = shoeSizes;

  // proview image
  const [previewImg, setPreviewImg] = useState("");
  const [reviewOpen, setReviewOpen] = useState(false);
  const [writeCommentOpen, setWriteCommentOpen] = useState(false);
  // for reviews rating

  const [reviewRating, setReviewRatings] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  //loading
  const [bagClicked, setBagClicked] = useState(false);

  // selected size
  const [size, setSize] = useState("");

  const reviewSubmitHandler = () => {
    setReviewRatings(0);
    setReviewComment("");

    let info = {
      id,
      ratings: reviewRating,
      comment: reviewComment,
    };
    dispatch(giveReviews(info)).then(() => {
      dispatch(DetailProduct(id));
    });
  };
  // handle favourite
  const handleFavourite = (id) => {
    dispatch(favouriteAction(id)).then(() => {
      dispatch(loadUser());
    });
  };

  product &&
    product.stock.forEach((stock) => {
      sizes.forEach((s, i) => {
        if (s.size === stock.size.toString()) {
          sizes[i].exist = true;
        }
      });
    });

  // add to bag
  const addToBag = () => {
    setSize("");
    setBagClicked(true);
    let info = {
      color: product.color,
      name: product.name,
      price: product.price,
      size: size,
      qty: 1,
      img: product.images[0].url,
      productId: id,
    };
    dispatch(addToBagAction(info)).then(() => {
      dispatch(getCartAction());
      setBagClicked(false);
    });
  };
  useEffect(() => {
    dispatch(DetailProduct(id));
  }, [dispatch, id]);
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        product && (
          <Fragment>
            <AutoText />
            <Navbar />
            <Menubar />

            <div className="flex flex-col  md:flex-row">
              <div className=" top-0 h-full w-full md:w-1/2 xl:sticky">
                <div className="flex min-h-[40vh] items-center justify-center overflow-hidden  sm:h-[80vh]">
                  <img
                    src={previewImg ? previewImg : product.images[0].url}
                    className=" w-full"
                    alt="productMainImg"
                  />
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
              <div className="w-full p-[10px] md:w-1/2 md:p-[20px]">
                <h2 className="text-[0.9rem]">
                  <LocalFireDepartmentIcon />
                  <span>1,531 purchased in the last 7 days</span>
                </h2>
                <h1 className="text-[20px] md:text-[30px]">{product.name}</h1>
                <h2 className="text-[15px] md:text-[25px]">${product.price}</h2>
                <div className="mt-5 flex items-center">
                  <Rating
                    name="simple-controlled"
                    size="medium"
                    value={product.ratings}
                    precision={0.1}
                    readOnly
                  />{" "}
                  <span className="">({product.ratings})</span>
                </div>
                <div className="mt-10">
                  <h2 className="my-2 text-[1.1rem]">Select Size</h2>
                  <div className="flex flex-wrap gap-1">
                    {sizes.map((item) => (
                      <div
                        className={`flex h-[60px] w-[60px] items-center justify-center border-[1px] ${
                          size === item.size
                            ? "border-[#000000c7]"
                            : "border-[#a3a3a368]"
                        } `}
                        onClick={() => setSize(item.exist ? item.size : "")}
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
                  disabled={cartLoading ? true : false}
                  className="my-3 flex items-center border-[1px] border-[black] bg-[#3a3a3a] p-3 px-6 text-[0.9rem] tracking-[1px] text-white md:text-[1.1rem]"
                  onClick={addToBag}
                >
                  {cartLoading && bagClicked ? "add..." : "Add To Bag"}{" "}
                  <span className="mx-1">{cart}</span>
                </button>
                <button
                  className="b_1 px-3 py-2 hover:bg-[whitesmoke]"
                  disabled={userLoading ? true : false}
                  onClick={() => handleFavourite(product._id)}
                >
                  Favourite{" "}
                  {user && user.favourite.includes(product._id) ? (
                    <FavoriteIcon sx={{ fontSize: "1.1rem" }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: "1.1rem" }} />
                  )}
                </button>
                <p className="py-5 text-[0.8rem] tracking-[1px] md:text-[1rem]">
                  {product.description}
                </p>
                <div>
                  <h2 className=" flex items-center justify-between text-[0.9rem] md:text-[1.2rem]">
                    <span>reviews & ratings ({product.numberOfReviews})</span>
                    <span
                      onClick={() => setReviewOpen(!reviewOpen)}
                      className="cursor-pointer"
                    >
                      {reviewOpen ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </span>
                  </h2>
                  <div className={`${reviewOpen ? "block" : "hidden"} `}>
                    <button
                      className="bb_1 my-3"
                      onClick={() => setWriteCommentOpen(!writeCommentOpen)}
                    >
                      write a reviews
                    </button>
                    {writeCommentOpen && (
                      <div className="flex flex-col items-start justify-start md:w-[80%]">
                        <Rating
                          name="simple-controlled"
                          size="small"
                          precision={0.1}
                          value={reviewRating}
                          onChange={(e) => setReviewRatings(e.target.value)}
                        />
                        <textarea
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                          className="b_1 my-2 h-[150px] w-full p-4 outline-none"
                          placeholder="Enter your comment"
                        ></textarea>
                        <div className="my-2 flex w-full justify-end">
                          <button
                            className="bg-[black] px-3 py-2 text-[white]"
                            onClick={reviewSubmitHandler}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                    <Reviews reviews={product.reviews} />
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4">
              <h2 className=" m-1 my-8 text-[1.1rem] md:m-10 md:text-[1.4rem]">
                You Might also like
              </h2>
              <div className="md:p-10">
                <CarouselBox />
              </div>
            </div>
            <FooterContent />
            <Footer />
          </Fragment>
        )
      )}
    </Fragment>
  );
}

export default ProductDetail;
