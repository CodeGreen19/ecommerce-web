import React from "react";

function Orders() {
  const imgUrl =
    "	https://res.cloudinary.com/ddyrlplxn/image/upload/v1700322228/product_img/jrm4ukig61pczyps79cx.webp";
  return (
    <div className="user_info_box min-h-[50vh] w-full bg-[whitesmoke] p-[1%] md:m-[2%] md:w-[60%] md:p-[5%]">
      <div className="relative my-3 flex items-center justify-start border-b-[1px]  border-b-[#0000002b] bg-[white]">
        <div className="h-[100px] w-[100px]">
          <img src={imgUrl} alt="orderedImg" />
        </div>
        <ul className="order_ul ml-4 p-1">
          <li>Name:Nike Air Max-for men</li>
          <li>Price:120$</li>
          <li>Qty:3</li>
          <li>Size: 6.6</li>
          <li>
            <span className="hidden sm:inline-block">Date:</span> 20-11-2003
          </li>
          <li className="absolute bottom-1 right-1 md:bottom-2 md:right-2">
            <span className="hidden sm:inline-block">Status:</span>{" "}
            <span className="text-[red]">Shipped</span>
          </li>
        </ul>
      </div>
      <div className="relative my-3 flex items-center justify-start border-b-[1px]  border-b-[#0000002b] bg-[white]">
        <div className="h-[100px] w-[100px]">
          <img src={imgUrl} alt="orderedImg" />
        </div>
        <ul className="order_ul ml-4 p-1">
          <li>Name:Nike Air Max-for men</li>
          <li>Price:120$</li>
          <li>Qty:3</li>
          <li>Size: 6.6</li>
          <li>
            <span className="hidden sm:inline-block">Date:</span> 20-11-2003
          </li>
          <li className="absolute bottom-1 right-1 md:bottom-2 md:right-2">
            <span className="hidden sm:inline-block">Status:</span>{" "}
            <span className="text-[red]">Shipped</span>
          </li>
        </ul>
      </div>
      <div className="relative my-3 flex items-center justify-start border-b-[1px]  border-b-[#0000002b] bg-[white]">
        <div className="h-[100px] w-[100px]">
          <img src={imgUrl} alt="orderedImg" />
        </div>
        <ul className="order_ul ml-4 p-1">
          <li>Name:Nike Air Max-for men</li>
          <li>Price:120$</li>
          <li>Qty:3</li>
          <li>Size: 6.6</li>
          <li>
            <span className="hidden sm:inline-block">Date:</span> 20-11-2003
          </li>
          <li className="absolute bottom-1 right-1 md:bottom-2 md:right-2">
            <span className="hidden sm:inline-block">Status:</span>{" "}
            <span className="text-[red]">Shipped</span>
          </li>
        </ul>
      </div>
      <div className="relative my-3 flex items-center justify-start border-b-[1px]  border-b-[#0000002b] bg-[white]">
        <div className="h-[100px] w-[100px]">
          <img src={imgUrl} alt="orderedImg" />
        </div>
        <ul className="order_ul ml-4 p-1">
          <li>Name:Nike Air Max-for men</li>
          <li>Price:120$</li>
          <li>Qty:3</li>
          <li>Size: 6.6</li>
          <li>
            <span className="hidden sm:inline-block">Date:</span> 20-11-2003
          </li>
          <li className="absolute bottom-1 right-1 md:bottom-2 md:right-2">
            <span className="hidden sm:inline-block">Status:</span>{" "}
            <span className="text-[red]">Shipped</span>
          </li>
        </ul>
      </div>
      <div className="relative my-3 flex items-center justify-start border-b-[1px]  border-b-[#0000002b] bg-[white]">
        <div className="h-[100px] w-[100px]">
          <img src={imgUrl} alt="orderedImg" />
        </div>
        <ul className="order_ul ml-4 p-1">
          <li>Name:Nike Air Max-for men</li>
          <li>Price:120$</li>
          <li>Qty:3</li>
          <li>Size: 6.6</li>
          <li>
            <span className="hidden sm:inline-block">Date:</span> 20-11-2003
          </li>
          <li className="absolute bottom-1 right-1 md:bottom-2 md:right-2">
            <span className="hidden sm:inline-block">Status:</span>{" "}
            <span className="text-[red]">Shipped</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Orders;
