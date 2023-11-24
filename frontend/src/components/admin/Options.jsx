import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import GradingIcon from "@mui/icons-material/Grading";
import "./style/DashBoard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Options() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { option } = useSelector((state) => state.options);
  const [selected, setSelected] = useState(option);
  const handleNavigate = (param) => {
    setSelected(param);
    navigate(`/admin/${param}`);
    dispatch({ type: "OptionRequest", payload: param });
  };
  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center border-[#5d5d5d4b] bg-[whitesmoke] pt-[2px] text-[1.3rem] sm:fixed sm:left-0 sm:right-0 sm:w-[260px] sm:items-start sm:border-[1px]">
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
  );
}

export default Options;
