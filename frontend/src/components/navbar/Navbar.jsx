import React, { Fragment, useEffect, useState } from "react";
import main_logo from "../image/main_logo.jpg";
import { cart, search, user as userIcon } from "../icons/icons";
import Brands from "./Brands";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import { filterData, filterDataEmpty, navItems } from "../utils/ProductUtils";
import { filteredProduct } from "../../redux/actions/product";
import { getCartAction } from "../../redux/actions/cart";

function Navbar({ mobileSearchOption }) {
  const { user } = useSelector((state) => state.user);
  const { cart: cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectItem, setSelectItem] = useState("");

  // for filter products
  const navItemHandler = (item) => {
    setSelectItem(item);
    navigate("/products");
    filterDataEmpty();
    filterData.category = item;
    dispatch(filteredProduct(filterData));
  };
  // search
  const handleSearch = () => {
    dispatch({ type: "SearchOpen" });
    navigate("/products");
  };
  const handleAccount = () => {
    if (user) {
      navigate("/profile");
    } else {
      setShowLogin(true);
    }
  };

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="relative z-30 flex h-[60px] items-center justify-between border-b-[1px] border-[#52525224] px-0 sm:h-[85px] sm:px-8">
        <div className="flex  h-full items-end">
          <div className=" h-full md:ml-0">
            <img
              src={main_logo}
              alt=""
              className="h-full"
              onClick={() => navigate("/")}
            />
          </div>
          <h2 className="ml-2 text-[28px] font-bold leading-[37px] sm:hidden">
            ShoeSafar<span>i</span>
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4 tracking-[2px] xl:gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => navItemHandler(item.filter)}
                className={`relative navItem_${item.name} cursor-pointer py-3 text-[18px] before:absolute before:bottom-[9px] before:left-1/2 before:h-[2px] before:w-0 before:rounded
            before:bg-black before:transition-[width,left] before:duration-300 hover:before:left-0 hover:before:w-full`}
                onMouseEnter={() =>
                  item.name === "Top Products"
                    ? setHover(true)
                    : setHover(false)
                }
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="nav_icons_box mr-2 self-end sm:self-center">
          <ul className="mb-3 flex items-center gap-4 sm:mb-0 sm:gap-6 ">
            <li onClick={handleSearch}>{search}</li>
            <li onClick={() => navigate("/cart")} className="relative">
              {cart}
              {cartItems && cartItems.length > 0 && (
                <span className="absolute left-[1.5px] top-[-3px] flex h-[17px] w-[17px] cursor-pointer  items-center justify-center rounded-full bg-[#000000] text-[0.7rem] text-[#ffffff]">
                  {cartItems.length}
                </span>
              )}
            </li>
            <li onClick={handleAccount}>{userIcon}</li>
          </ul>
        </div>
        <div
          className={`detail_nav_item absolute left-0 top-[85px] z-[60] flex items-center justify-evenly overflow-hidden ${
            hover
              ? "h-[330px] overflow-visible border-b-[1px] "
              : "h-0 delay-500"
          } w-full  border-[#6060604d] bg-[#ffffff] transition-[height,border] duration-500`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Brands open={hover} />
        </div>
        <Login open={showLogin} close={setShowLogin} />
      </div>
      {mobileSearchOption && (
        <ul className="mobile_search_item m-auto flex w-[96vw] items-center justify-start overflow-x-scroll md:hidden">
          {navItems.map((item, index) => (
            <li
              className={`b_1 m-1 ${
                selectItem === item.filter ? "bg-[#1c1c1c] text-white" : ""
              } flex-none px-3 py-1 text-[0.9rem]`}
              key={index}
              onClick={() => navItemHandler(item.filter)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default Navbar;
