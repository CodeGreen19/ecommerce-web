// to use in the product section
export const colors = ["black", "white", "red", "green", "gray", "brown"];
export const sizes = [
  "4.5",
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
];
export const ratings = ["5", "4", "3", "2", "1", "0"];
export const height = ["low-top", "mid-top", "high-top"];
export const checkStyle = {
  color: "rgb(204, 204, 204)",
  "&.Mui-checked": {
    color: "black",
  },
};

export const navItems = [
  { name: `New`, filter: "new" },
  { name: "Men", filter: "men" },
  { name: "Women", filter: "woman" },
  { name: "Kid", filter: "kid" },
  { name: "Sports", filter: "sports" },
  { name: "Top Products", filter: "top-products" },
];

// filtered arr
export let filterData = {
  keyword: "",
  category: "",
  minPrice: "",
  maxPrice: "",
  rating: "",
  height: "",
  sizes: "",
  color: "",
};
// default price values
export const defaultPriceValue = {
  minPrice: 0,
  maxPrice: 500,
};

export const filterDataEmpty = () => {
  filterData.keyword = "";
  filterData.category = "";
  filterData.minPrice = "";
  filterData.maxPrice = "";
  filterData.rating = "";
  filterData.height = "";
  filterData.sizes = "";
  filterData.color = "";
};
