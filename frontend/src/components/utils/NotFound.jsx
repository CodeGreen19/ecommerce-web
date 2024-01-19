import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full items-center justify-center p-2 text-[0.7rem] md:text-[1rem]">
      <div>
        <span>I Think You Lost..</span>{" "}
        <span className="bb_1" onClick={() => navigate("/")}>
          Go Home
        </span>
      </div>
    </div>
  );
}

export default NotFound;
