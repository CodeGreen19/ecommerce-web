import React from "react";
import google from "../image/google.png";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { baseUrl } from "../utils/url/BaseUrl";

function Login({ open, close }) {
  const handleClickLogin = () => {
    window.open(`${baseUrl}/api/user/google/login`, "_self");
  };
  return (
    <div
      className={`login_container  fixed left-0 top-0 z-[80] flex items-center justify-center overflow-hidden ${
        open ? "add" : ""
      }   `}
    >
      <div className="login_box relative flex w-full flex-col items-center justify-center bg-white p-4 pb-8 sm:w-[500px]">
        <h3 className="self-start py-3 text-[1.2rem] tracking-[3px]">
          LOGIN OR SIGNUP <span className="text-[red]">*</span>
        </h3>
        <div>
          <div className="login_option_box" onClick={handleClickLogin}>
            <img src={google} alt="google" className="w-[35px] bg-white" />
            <span className="mx-2 text-[1.1rem]">continue with google</span>
          </div>
        </div>
        <button
          onClick={() => close(false)}
          className="login_btn absolute right-2 top-[-10px] border-[1px] border-black bg-white sm:right-[-10px] "
        >
          <CloseRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default Login;
