import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AutoText() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  return (
    <div className="sticky top-0 z-50  flex h-[2rem] w-full items-center justify-center bg-black text-[0.7rem] text-white sm:h-10 sm:text-[0.8rem] ">
      <span className=" tracking-[2px] sm:tracking-[3px]">
        {user && user.name ? (
          <span>
            Welcome{" "}
            <span
              className="bb_1_w cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              {user.name}
            </span>
          </span>
        ) : (
          <span>LOGIN TO GET 10% DISCOUNT !</span>
        )}
      </span>
    </div>
  );
}

export default AutoText;
