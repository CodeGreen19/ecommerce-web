import React, { Fragment, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import GradingIcon from "@mui/icons-material/Grading";
import "./style/DashBoard.css";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useDispatch, useSelector } from "react-redux";

function Options() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { option, isClicked } = useSelector((state) => state.options);
  const [selected, setSelected] = useState(option);
  const handleNavigate = (param) => {
    setSelected(param);
    navigate(`/admin/${param}`);
    let data = { param, clicked: true };
    dispatch({ type: "OptionRequest", payload: data });
  };
  return (
    <Fragment>
      <div
        className={`fixed top-0 z-[100] flex h-screen w-full ${
          isClicked ? "-translate-x-full sm:translate-x-0" : "translate-x-0"
        }  items-center justify-center border-[#5d5d5d4b] bg-[whitesmoke] pt-[2px] text-[1.3rem] sm:fixed sm:left-0 sm:right-0 sm:w-[260px] sm:items-start sm:border-[1px]`}
      >
        <div className="w-[65%]">
          <ul className="dashboard_options flex w-full flex-col">
            <li
              className={selected === "dashboard" && "add"}
              onClick={() => handleNavigate("dashboard")}
            >
              <span>
                <DashboardIcon />
                Dashboard
              </span>
              <KeyboardDoubleArrowRightIcon />
            </li>
            <li
              className={selected === "products" && "add"}
              onClick={() => handleNavigate("products")}
            >
              <span>
                <GradingIcon />
                Products
              </span>
              <KeyboardDoubleArrowRightIcon />
            </li>
            <li
              className={selected === "users" && "add"}
              onClick={() => handleNavigate("users")}
            >
              <span>
                <PeopleIcon />
                Users
              </span>
              <KeyboardDoubleArrowRightIcon />
            </li>
            <li
              className={selected === "orders" && "add"}
              onClick={() => handleNavigate("orders")}
            >
              <span>
                <AssignmentIcon />
                Orders
              </span>
              <KeyboardDoubleArrowRightIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full bg-white text-[black] sm:hidden">
        <span
          onClick={() =>
            dispatch({
              type: "OptionRequest",
              payload: { param: null, clicked: false },
            })
          }
        >
          <KeyboardDoubleArrowLeftIcon />
        </span>
      </div>
    </Fragment>
  );
}

export default Options;
