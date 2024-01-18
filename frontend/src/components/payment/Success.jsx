import React from "react";
import { Link } from "react-router-dom";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

function Success() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex items-center justify-center gap-1">
        <DoneAllRoundedIcon sx={{ color: "green" }} />
        <span>Payment Successful .... </span>
      </div>
      <Link to={"/profile"} className="bb_1">
        Go To Profile
      </Link>
    </div>
  );
}

export default Success;
