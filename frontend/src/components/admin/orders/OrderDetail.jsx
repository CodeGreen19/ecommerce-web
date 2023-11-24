import React from "react";
import CloseIcon from "@mui/icons-material/Close";
function OrderDetail({ setOpen }) {
  return (
    <div className="fixed flex h-screen w-full items-center justify-center bg-[#00000070]">
      <div className="b_1 relative h-[80vh] w-full bg-[white] md:w-[70%] xl:w-[60%]">
        this is update content
        <button
          className="b_1 absolute -top-3 right-0 bg-[white] px-2 py-1 md:-right-3"
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default OrderDetail;
