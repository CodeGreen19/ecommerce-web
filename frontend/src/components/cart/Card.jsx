import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch } from "react-redux";
import {
  deleteToBagAction,
  getCartAction,
  updateQtyAction,
} from "../../redux/actions/cart";

function Card({ cartInfo }) {
  const dispatch = useDispatch();

  // delete cartitem handler
  const DeleteHandler = (id) => {
    dispatch(deleteToBagAction(id)).then(() => {
      dispatch(getCartAction());
    });
  };

  // hanlder quantity
  const quantityHandler = (cartInfo, action) => {
    let info = {
      itemId: cartInfo._id,
      action,
      productId: cartInfo.productId,
      size: cartInfo.size,
    };
    dispatch(updateQtyAction(info)).then(() => {
      dispatch(getCartAction());
    });
  };
  return (
    <div className=" cart_card_box relative flex w-full items-start justify-start border-b-[1px] border-b-[#0000001c]">
      <div className="h-[80px] w-[80px] overflow-hidden border-gray-100 sm:h-[150px] sm:w-[150px] ">
        <img src={cartInfo.img} className="w-full" alt="" />
      </div>
      <div>
        <ul className="w-full">
          <li>
            <span>name</span>:{cartInfo.name}
          </li>
          <li>
            <span>color </span>: {cartInfo.color}
          </li>
          <li>
            <span>size</span>: {cartInfo.size}
          </li>
          <li>
            <span> quantity</span>: 1
          </li>
        </ul>
        <div className="h-[30px]">
          <button
            className="add_btn "
            onClick={() => quantityHandler(cartInfo, "decrease")}
          >
            -
          </button>
          <button className="add_btn">{cartInfo.qty}</button>
          <button
            className="add_btn "
            onClick={() => quantityHandler(cartInfo, "increase")}
          >
            +
          </button>
        </div>
      </div>
      <div className=" absolute bottom-3 right-3 flex gap-3">
        {/* <button>
          <FavoriteBorderOutlinedIcon />
        </button> */}
        <button onClick={() => DeleteHandler(cartInfo._id)}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </div>
      <div className="absolute right-3 top-3">{cartInfo.price} $</div>
    </div>
  );
}

export default Card;
