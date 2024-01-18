import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function Menubar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  let user = { role: "admin" };
  /// menu click handler
  const handleMenuBtnClick = (item) => {
    if (item === "home") navigate("/");

    // if search
    if (item === "search") {
      dispatch({ type: "SearchOpen" });
      navigate("/products");
    }
    // if product
    if (item === "products") {
      dispatch({ type: "RemoveCategory" });
      navigate("/products");
    }
    // if account
    if (item === "account") navigate("/profile");
    // if dashboard
    if (item === "dashboard") {
      navigate("/admin/dashboard");
      dispatch({ type: "OptionRequest", payload: item });
    }
    setOpen(!open);
  };
  return (
    <div
      className={`main_menu_box fixed left-0 top-0 flex ${
        open ? "h-0 delay-700" : "h-full"
      } z-[1000] w-full flex-wrap overflow-hidden`}
    >
      <div
        className={` flex h-[50%] w-[50%] items-end justify-end bg-[#222222] text-[white]  duration-500 ${
          open ? "-translate-y-full opacity-0" : "opacity-100"
        } `}
      >
        <span
          className="menu_span_icons"
          onClick={() => handleMenuBtnClick("home")}
        >
          <span>
            <HomeOutlinedIcon /> <br />
            HOME
          </span>
        </span>
      </div>
      <div
        className={` flex h-[50%] w-[50%]  items-end justify-start bg-[#222222] text-[white]  delay-100 duration-500 ${
          open ? "translate-x-full opacity-0" : "opacity-100"
        } `}
      >
        <span
          className="menu_span_icons"
          onClick={() => handleMenuBtnClick("products")}
        >
          <span>
            <AccountTreeOutlinedIcon /> <br />
            PRODUCTS
          </span>
        </span>
      </div>
      <div
        className={` flex h-[50%] w-[50%] items-start justify-end bg-[#222222] text-[white]  delay-200 duration-500 ${
          open ? "-translate-x-full opacity-0" : "opacity-100"
        } `}
      >
        <span
          className="menu_span_icons"
          onClick={() => handleMenuBtnClick("account")}
        >
          <span>
            <PortraitOutlinedIcon /> <br />
            ACCOUNT
          </span>
        </span>
      </div>

      {user.role === "admin" ? (
        <div
          className={`flex h-[50%] w-[50%] items-start justify-start bg-[#222222] text-[white]  delay-300 duration-500 ${
            open ? "translate-y-full opacity-0" : "opacity-100"
          } `}
        >
          <span
            className="menu_span_icons"
            onClick={() => handleMenuBtnClick("dashboard")}
          >
            <span>
              <DashboardOutlinedIcon /> <br />
              DASHBOARD
            </span>
          </span>
        </div>
      ) : (
        <div
          className={`flex h-[50%] w-[50%] items-start justify-start bg-[#222222] text-[white]  delay-300 duration-500 ${
            open ? "translate-y-full opacity-0" : "opacity-100"
          } `}
        >
          <span
            className="menu_span_icons"
            onClick={() => handleMenuBtnClick("search")}
          >
            <span>
              <LocationSearchingIcon /> <br />
              SEARCH
            </span>
          </span>
        </div>
      )}
      <button
        className={`menu_button ${
          !open && "add"
        } fixed right-[5px] top-3 z-10 p-2 sm:right-2`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <MenuRoundedIcon className={clsx("text-[black]")} />
        ) : (
          <CloseRoundedIcon className={clsx("text-white")} />
        )}
      </button>
    </div>
  );
}

export default Menubar;
