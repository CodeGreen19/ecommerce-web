import { Rating } from "@mui/material";
import React from "react";

function Reviews({ reviews }) {
  return (
    <div>
      {reviews &&
        reviews.map((item) => (
          <div className="my-5">
            <p className="my-1 text-[0.8rem] md:text-[0.9rem]">
              {item.comment}
            </p>
            <h1 className="flex items-center justify-start gap-2">
              <span>{item.name} </span>
              <Rating
                name="simple-controlled"
                size="small"
                value={item.rating}
                precision={0.1}
                readOnly
              />
            </h1>
          </div>
        ))}
    </div>
  );
}

export default Reviews;
