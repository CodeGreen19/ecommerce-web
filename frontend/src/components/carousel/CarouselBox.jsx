import React, { Fragment, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { images as items } from "./Images";
function CarouselBox() {
  const carouselRef = useRef();

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      const currentPosition = carouselRef.current.scrollLeft;
      const newPosition = currentPosition - 400;
      scrollToPosition(newPosition);
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      const currentPosition = carouselRef.current.scrollLeft;
      const newPosition = currentPosition + 400;
      scrollToPosition(newPosition);
    }
  };

  const scrollToPosition = (position) => {
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "smooth";
      carouselRef.current.scrollLeft = position;
      setTimeout(() => {
        carouselRef.current.style.scrollBehavior = "auto";
      }, 500);
    }
  };
  return (
    <Fragment>
      <div
        ref={carouselRef}
        className="carousel_box xl-[0px] relative flex h-[170px] gap-1 overflow-x-auto transition-all sm:h-[220px] md:h-[300px] xl:mx-[100px] xl:h-[330px] "
      >
        {items.map((item, i) => (
          <div className="h-full flex-shrink-0 cursor-pointer pb-1" key={i}>
            <img src={item.image} alt={item.title} className="h-full" />
          </div>
        ))}
      </div>
      <div className="relative h-2 w-full overflow-visible">
        <button
          className="left absolute left-[5px] top-[-50px] hidden border-[1px] border-[black] bg-white px-4 py-2 sm:block xl:left-[100px]"
          onClick={handleScrollLeft}
        >
          <ChevronLeftIcon />
        </button>
        <button
          className="left absolute right-[5px] top-[-50px] hidden border-[1px] border-[black] bg-white px-4 py-2 sm:block xl:right-[100px]"
          onClick={handleScrollRight}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </Fragment>
  );
}

export default CarouselBox;
