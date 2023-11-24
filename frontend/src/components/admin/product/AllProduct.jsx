import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../../redux/actions/product";
import Footer from "../../footer/Footer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function AllProduct({ goUpdate, setProductId }) {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);

  const handleUpdate = (id) => {
    goUpdate("update");
    setProductId(id);
  };
  useEffect(() => {
    dispatch(allProduct());
  }, [dispatch]);
  return (
    <Fragment>
      <div className=" w-full overflow-x-auto border-[1px] border-[#0000002b]">
        <div className=" min-w-[768px] bg-[whitesmoke] p-2">
          <ul className="all_products_list bg-[#090909d8] p-2 text-[white]">
            <li>Product Id</li>
            <li>Name</li>
            <li>Stock</li>
            <li>Price</li>
            <li>Actions</li>
          </ul>
          {allProducts &&
            allProducts.map((product) => (
              <ul
                className={`all_products_list my-1 border-[1px] border-[#2625252f] bg-[white] p-2`}
                key={product._id}
              >
                <li>{product._id}</li>
                <li className="text-[1.2rem]">{product.name}</li>
                <li>
                  <table className="all_products_size_table">
                    <tr>
                      <td>Size</td>
                      <td>Qty</td>
                    </tr>
                    {product.stock.map((stock) => (
                      <tr>
                        <td>{stock.size}</td>
                        <td>{stock.qty}</td>
                      </tr>
                    ))}
                  </table>
                </li>
                <li className="text-[1.1] md:text-[1.2rem]">
                  {product.price}$
                </li>
                <li>
                  <span onClick={() => handleUpdate(product._id)}>Edit</span>{" "}
                  <span>
                    <DeleteOutlineIcon />
                  </span>
                </li>
              </ul>
            ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default AllProduct;
