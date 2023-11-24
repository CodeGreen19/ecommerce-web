import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { textSlice } from "./Helper";

function Card({ product }) {
  return (
    <Link
      to={`/product/${product._id}`}
      className=" aspect-[1/1] w-[49%] border-[1px]  border-[#2c2c2c31] sm:w-[32%]"
    >
      <div className="flex  w-full items-center justify-center overflow-hidden bg-blue-300">
        <img className="w-full" src={product.images[0].url} alt="card" />
      </div>
      <div className="flex flex-col items-start justify-center p-1 py-2 sm:p-3">
        <h1 className="hidden lg:block">{textSlice(product.name, 40)}</h1>
        <h3 className="lg:hidden">{textSlice(product.name, 17)}</h3>
        <span>$ {product.price}</span>
        <div>
          <Rating
            name="simple-controlled"
            size="small"
            value={product.rating}
            readOnly
          />
        </div>
      </div>
    </Link>
  );
}

export default Card;
