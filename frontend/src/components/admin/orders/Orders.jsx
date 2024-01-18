import React, { Fragment, useEffect, useState } from "react";
import Options from "../Options";
import Footer from "../../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../../redux/actions/user";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../style/Orders.css";
import OrderDetail from "./OrderDetail";
import {
  AllOrderAction,
  deleteOrderAction,
} from "../../../redux/actions/order";

function Orders() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState("");
  const { adminOrders } = useSelector((state) => state.order);

  const updateHandler = (order) => {
    setOpen(order);
  };

  // delete
  const handleDelete = (id) => {
    dispatch(deleteOrderAction(id)).then(() => {
      dispatch(AllOrderAction());
    });
  };
  useEffect(() => {
    dispatch(allUsers());
    dispatch(AllOrderAction());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="mt-[30px] sm:ml-[260px] sm:mt-0">
        <div>
          <Options />
        </div>
        <div className="absolute left-0 top-0">
          {open && <OrderDetail setOpen={setOpen} data={open} />}
        </div>
        <div className=" min-h-[90vh] w-full overflow-x-auto  ">
          <div className=" min-w-[768px] bg-[whitesmoke]">
            <ul className="all_orders_list bg-[#090909d8]  p-2 text-[white]">
              <li>Order Id</li>
              <li>Amount</li>
              <li>Quantity</li>
              <li>Status</li>
              <li>Actions</li>
            </ul>
            {adminOrders &&
              adminOrders.map((order) => (
                <ul
                  className={`all_orders_list my-1 border-[1px] border-[#2625252f] bg-[white] p-2`}
                >
                  <li>{order._id}</li>
                  <li className="text-[1rem]">{order.price}$</li>

                  <li>{order.qty}</li>
                  <li
                    className={`${
                      order.status === "processing"
                        ? "text-[blue]"
                        : order.status === "shipped"
                        ? "text-[green]"
                        : "text-[tomato]"
                    }`}
                  >
                    {order.status}
                  </li>

                  <li>
                    <span onClick={() => updateHandler(order)}>Edit</span>
                    <span onClick={() => handleDelete(order._id)}>
                      <DeleteOutlineIcon />
                    </span>
                  </li>
                </ul>
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Orders;
