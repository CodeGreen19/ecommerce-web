import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  AllOrderAction,
  updateStatusAction,
} from "../../../redux/actions/order";
import { useDispatch, useSelector } from "react-redux";
function OrderDetail({ setOpen, data }) {
  const [status, setStatus] = useState("");
  const { loading } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const handleUpdate = (id) => {
    let data = { status, id };
    dispatch(updateStatusAction(data)).then(() => {
      dispatch(AllOrderAction()).then(() => {
        setOpen("");
      });
    });
  };
  return (
    <div className="fixed z-[100] flex h-screen w-full items-center justify-center bg-[#00000070]">
      <div className="b_1 relative h-[80vh] w-full bg-[white] md:w-[70%] xl:w-[60%]">
        <div className="m-3">
          <ul className="b_1 bg-[whitesmoke] p-3 text-[0.8rem] md:text-[1rem]">
            <h1 className="bb_1">User Information</h1>
            <li>FirstName: {data.firstName}</li>
            <li>LastName: {data.lastName}</li>
            <li>Country: {data.country}</li>
            <li>State: {data.state}</li>
            <li>Village: {data.village}</li>
            <li>Mobile No: {data.mobileNo}</li>
            <li>Pin Code: {data.pinCode}</li>
          </ul>
          <div className="b_1 mt-3 flex flex-col items-start justify-between bg-[whitesmoke] ">
            <ul className="m-3 text-[0.8rem] md:text-[1rem]">
              <h1 className="bb_1">Order Information</h1>
              {data.cartItems.map((item, i) => (
                <li
                  className="my-1 flex items-start justify-between gap-1"
                  key={i}
                >
                  <div className="flex flex-wrap gap-2">
                    <span>{i + 1}.</span>
                    <span>name:{item.name},</span>
                    <span>price:{item.price},</span>
                    <span>qty:{item.qty},</span>
                    <span>size:{item.size}</span>
                    <span>
                      size: <span className="text-[blue]">{data.status}</span>
                    </span>
                  </div>
                  <img src={item.img} className="b_1 w-[45px]" alt="itemImg" />
                </li>
              ))}
            </ul>
          </div>
          <div className="m-3 flex items-center justify-end gap-2">
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="b_1 p-1 md:p-3 "
            >
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
            <button
              disabled={loading ? true : false}
              onClick={() => handleUpdate(data._id)}
              className="b_1 bg-[black] px-2 py-1 text-white md:px-3 md:py-2"
            >
              Update
            </button>
          </div>
        </div>
        <button
          className="b_1 absolute -top-3 right-0 bg-[white] px-2 py-1 md:-right-3"
          onClick={() => setOpen("")}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default OrderDetail;
