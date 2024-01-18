import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const PrettoSlider = styled(Slider)({
  color: "rgb(64,64,64)",
  height: 1,
  borderRadius: "0",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 14,
    width: 14,
    borderRadius: "50%",
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

export default function RangeSlider({
  priceHandler,
  defaultValue,
  priceValue,
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={priceValue}
        defaultValue={[defaultValue.minPrice, defaultValue.maxPrice]}
        min={0}
        max={500}
        onChange={priceHandler}
      />
    </Box>
  );
}
