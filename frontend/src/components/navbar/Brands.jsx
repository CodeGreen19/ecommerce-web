import React, { Fragment } from "react";

function Brands({ open }) {
  return (
    <Fragment>
      <div
        className={`${
          open
            ? " translate-x-0 opacity-[1] delay-500"
            : "translate-x-[-30px] opacity-[0]"
        } brand_style`}
      >
        Air force 1
      </div>
      <div
        className={`${
          open ? " scale-[1] opacity-[1] delay-500" : "scale-[0.7] opacity-[0]"
        } brand_style`}
      >
        Air force 2
      </div>
      <div
        className={`${
          open
            ? " translate-x-0 opacity-[1] delay-500"
            : "translate-x-[30px] opacity-[0]"
        } brand_style`}
      >
        Air force 3
      </div>
    </Fragment>
  );
}

export default Brands;
