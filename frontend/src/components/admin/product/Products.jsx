import React, { Fragment, useState } from "react";
import "../style/Products.css";
import AllProduct from "./AllProduct";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import Options from "../Options";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../../redux/actions/product";

function Products() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);
  const [selected, setSelected] = useState("all");
  const [productId, setProductId] = useState("");

  const handleAllsection = () => {
    setSelected("all");
    dispatch(allProduct());
  };
  return (
    <Fragment>
      <div className="sm:pl-[260px]">
        <div>
          <Options />
        </div>
        <div className=" flex h-[70px] w-full items-end justify-center border-[1px] border-[#0000002c] bg-[#e8e8e8] sm:h-[90px] ">
          <ul className="product_options flex gap-12">
            <li
              className={selected === "all" && `before:bg-[black]`}
              onClick={handleAllsection}
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
