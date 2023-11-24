import React, { Fragment, useState } from "react";
import "../style/Products.css";
import AllProduct from "./AllProduct";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import Options from "../Options";
import { useSelector } from "react-redux";

function Products() {
  const { allProducts } = useSelector((state) => state.product);
  const [selected, setSelected] = useState("all");
  const [productId, setProductId] = useState("");
  return (
    <Fragment>
      <div className="hidden md:block">
        <Options />
      </div>
      <div className="md:pl-[260px]">
        <div className=" flex h-[70px] w-full items-end justify-center border-[1px] border-[#0000002c] bg-[#e8e8e8] sm:h-[90px] ">
          <ul className="product_options flex gap-12">
            <li
              className={selected === "all" && `before:bg-[black]`}
              onClick={() => setSelected("all")}
            >
              Products {`(${allProducts && allProducts.length})`}
            </li>
            <li
              className={selected === "create" && `before:bg-[black]`}
              onClick={() => setSelected("create")}
            >
              Create
            </li>
            <li
              className={selected === "update" && `before:bg-[black]`}
              onClick={() => setSelected("update")}
            >
              Update
            </li>
          </ul>
        </div>
        {selected === "create" ? (
          <CreateProduct />
        ) : selected === "update" ? (
          <EditProduct productId={productId} />
        ) : (
          <AllProduct goUpdate={setSelected} setProductId={setProductId} />
        )}
      </div>
    </Fragment>
  );
}

export default Products;
