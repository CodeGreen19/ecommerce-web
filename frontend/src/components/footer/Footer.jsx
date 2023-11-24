import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <div className=" flex h-[19vh] w-full flex-col items-end justify-end bg-[#121212] px-2 py-3 text-white">
      <ul className="social_icons flex w-full items-center justify-end gap-3 sm:mr-2 sm:gap-5 ">
        <li>
          <a href="https://www.twitter.com">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com">
            <YouTubeIcon />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <FacebookIcon />
          </a>
        </li>
      </ul>
      <div className="footer_location mt-3 text-right sm:self-start sm:text-left">
        <span>
          <LocationOnIcon />
          <span> Bangladesh</span>
        </span>
        <br />
        <span className="text-[0.8rem] tracking-[1px] text-[#b8b8b8]">
          <CopyrightIcon /> 2023, All Right Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
