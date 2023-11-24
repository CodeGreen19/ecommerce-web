import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const PrettoSlider = styled(Slider)({
  color: "gray",
  height: 8,
  borderRadius: "0",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    borderRadius: "0",
    backgroundColor: "black",

    border: "2px solid black",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    color: "white",
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "black",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function RangeSlider() {
  return (
    <Box sx={{ width: "100%" }}>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={[0, 500]} // Set the initial value for the slider range
        min={0} // Set the minimum value of the slider
        max={1000}
      />
    </Box>
  );
}
