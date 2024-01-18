import React, { Fragment, useEffect, useState } from "react";
import AutoText from "../home/AutoText";
import Navbar from "../navbar/Navbar";
import "../style/Profile.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FooterContent from "../footer/FooterContent";
import Footer from "../footer/Footer";
import Login from "../login/Login";
import Account from "./Account";
import { useDispatch, useSelector } from "react-redux";
import Orders from "./Orders";
import WishList from "./WishList";
import { myOrdersAction } from "../../redux/actions/order";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const { myOrders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const text = `hi, ${user && user.name}`;
  const [openLogin, setOpenLogin] = useState(false);
  const [selected, setSelected] = useState("account");
  const optionsHandler = (select) => {
    setSelected(select);
  };
  useEffect(() => {
    dispatch(myOrdersAction());
  }, [dispatch]);
  return (
    <Fragment>
      <Login open={openLogin} />
      <AutoText />
      <Navbar openLogin={setOpenLogin} />
      <div className=" h-[24vh] w-full  border-b-[1px] border-b-[#4646463e] md:h-[26vh] ">
        <div className="flex h-[60%] flex-col items-center justify-center gap-2 md:mx-[100px] md:items-start">
          <h2 className=" text-[1.7rem] tracking-[2px] md:text-[3rem] ">
            {text.toUpperCase()}
          </h2>
          <p>
            welcome to <span className="text-red-500">S</span>oeSafari
          </p>
        </div>
        <div className="Profile_item_box flex h-[40%] w-full items-end justify-center">
          <ul className="flex gap-4 tracking-[1px]">
            <li
              className={`${selected === "account" && "bb_4"} cursor-pointer`}
              onClick={() => optionsHandler("account")}
            >
              Account
            </li>
            <li
              className={`${selected === "orders" && "bb_4"} cursor-pointer`}
              onClick={() => optionsHandler("orders")}
            >
              Orders({myOrders && myOrders.length})
            </li>
            <li
              className={`${selected === "wish" && "bb_4"} cursor-pointer`}
              onClick={() => optionsHandler("wish")}
            >
              Favourites({user && user.favourite.length})
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full ">
        <div className="account_preview hidden h-[400px] w-[35%] bg-[whitesmoke] pt-4 xl:flex xl:flex-col xl:items-center xl:justify-start">
          <h2 className="w-[40%] text-[1.3rem] tracking-[2px]">overview</h2>
          <button>
            <span>Section 1</span> <KeyboardArrowRightIcon />
          </button>
          <button>
            <span>Section 2 </span>
            <KeyboardArrowRightIcon />
          </button>
          <button>
            <span>Section 3</span> <KeyboardArrowRightIcon />
          </button>
        </div>
        {user && selected === "account" ? (
          <Account />
        ) : selected === "orders" ? (
          <Orders />
        ) : (
          <WishList />
        )}
      </div>
      <FooterContent />
      <Footer />
    </Fragment>
  );
}

export default Profile;
