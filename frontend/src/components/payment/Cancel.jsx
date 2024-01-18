import React from "react";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex items-center justify-center gap-1">
        <ReportProblemRoundedIcon sx={{ color: "red" }} />
        <span>Something went wrong .... </span>
      </div>
      <Link to={"/"} className="bb_1">
        Go Home
      </Link>
    </div>
  );
}

export default Cancel;
