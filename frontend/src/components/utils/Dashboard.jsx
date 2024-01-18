export const categoryArr = [
  { name: "new" },
  { name: "men" },
  { name: "women" },
  { name: "sports" },
  { name: "top-products" },
  { name: "kid" },
];

export const addArrayElements = (arr) => {
  const result = arr.reduce((sum, current) => sum + current, 0);
  return result;
};

export const formatDate = (dateString) => {
  let formattedDate = new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};

export const formatedAreaData = (data) => {
  const mergedData = data.reduce((acc, item) => {
    const existingDate = acc.find((d) => d.data === item.data);
    if (existingDate) {
      existingDate.price += item.price;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);
  return mergedData;
};
