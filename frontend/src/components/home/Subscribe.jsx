import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Subscribe() {
  const [subsText, setSubsText] = useState();
  return (
    <div className="flex h-[38vh] w-full flex-col items-center justify-evenly  bg-[#ffffff] xl:flex-row">
      <div className="m-2">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl">
          <EmailOutlinedIcon />{" "}
          <span className="tracking-[1px]">STAY CONNECTED</span>
        </h2>
        <p>
          Don't miss the opporturnity to get updates on all that's new at
          ShoeSafari !
        </p>
      </div>
      <div>
        <div className="m-2 tracking-[1px] text-[gray]">
          enter your email address
        </div>
        <div>
          <input
            type="text"
            className="m-2 border-[1px] border-[black] px-2 py-1 outline-none md:px-3 md:py-2 "
            placeholder="email"
            value={subsText}
            onChange={(e) => setSubsText(e.target.value)}
          />
          <button
            onClick={() => setSubsText("")}
            className="ml-2 bg-[black] px-2 py-1 tracking-[1px] text-white md:ml-0 md:px-3 md:py-2"
          >
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
