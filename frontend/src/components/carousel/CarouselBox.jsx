import React, { Fragment, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { allProduct } from "../../redux/actions/product";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CarouselBox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(allProduct());
  }, [dispatch]);
  return (
    <Fragment>
      {allProducts && (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay={false}
          centerMode={false}
          className=""
          containerClass="w-full"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {allProducts.map((item, i) => (
            <div key={i}>
              <img
                src={item.images[0].url}
                className="w-[100%]"
                alt="productImg"
                onClick={() => navigate(`/product/${item._id}`)}
              />
            </div>
          ))}
        </Carousel>
      )}
    </Fragment>
  );
}

export default CarouselBox;
