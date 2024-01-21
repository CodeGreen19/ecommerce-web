import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/Dashboard";

function Orders() {
  const { myOrders } = useSelector((state) => state.order);

  return (
    <div className="user_info_box min-h-[50vh] w-full bg-[whitesmoke] p-[1%] md:m-[2%] md:w-[60%] md:p-[5%]">
      {myOrders &&
        myOrders.map((data, i) => (
          <div className="b_1 relative my-[20px] p-1" key={i}>
            <div className=" b_1 absolute left-[-1px] top-[-15px] bg-[green] p-1 text-[0.8rem] text-[white]">
              {data.cartItems.length} items in one order
            </div>
            {data.cartItems.map((item, i) => (
              <div
                key={i}
                className="relative my-3 flex items-center justify-start border-b-[1px]  border-b-[#0000002b] bg-[white]"
              >
                <div className="h-[100px] w-[100px]">
                  <img src={item.img} alt="orderedImg" />
                </div>
                <ul className="order_ul ml-4 p-1">
                  <li>Name:{item.name}</li>
                  <li>Price:{item.price}$</li>
                  <li>Qty:{item.qty}</li>
                  <li>Size: {item.size}</li>
                  <li>
                    <span className="hidden sm:inline-block">Date:</span>{" "}
                    {formatDate(data.createdAt)}
                  </li>
                  <li className="absolute bottom-1 right-1 md:bottom-2 md:right-2">
                    <span className="hidden sm:inline-block">Status:</span>{" "}
                    <span
                      className={`${
                        data.status === "delivered"
                          ? "text-[red]"
                          : "text-[green]"
                      }`}
                    >
                      {data.status}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Orders;
