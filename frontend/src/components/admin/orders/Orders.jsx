import React, { Fragment, useEffect, useState } from "react";
import Options from "../Options";
import Footer from "../../footer/Footer";
import { useDispatch } from "react-redux";
import { allUsers } from "../../../redux/actions/user";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../style/Orders.css";
import OrderDetail from "./OrderDetail";

function Orders() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const updateHandler = () => {
    setOpen(true);
    console.log("this is set");
  };
  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="md:ml-[260px] ">
        <div className="hidden md:block">
          <Options />
        </div>
        <div className="absolute left-0 top-0">
          {open && <OrderDetail setOpen={setOpen} />}
        </div>
        <div className=" min-h-[90vh] w-full overflow-x-auto ">
          <div className=" min-w-[768px] bg-[whitesmoke]">
            <ul className="all_orders_list bg-[#090909d8] p-2 text-[white]">
              <li>Order Id</li>
              <li>Amount</li>
              <li>Quantity</li>
              <li>Status</li>
              <li>Actions</li>
            </ul>
            <ul
              className={`all_orders_list my-1 border-[1px] border-[#2625252f] bg-[white] p-2`}
            >
              <li>9549295429345924</li>
              <li className="text-[1rem]">130$</li>

              <li>4</li>
              <li>Processing</li>

              <li>
                <span onClick={() => updateHandler()}>Edit</span>
                <span>
                  <DeleteOutlineIcon />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Orders;
