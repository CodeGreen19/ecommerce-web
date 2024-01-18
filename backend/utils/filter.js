function search(query, queryStr) {
  const keyword = queryStr.keyword
    ? {
        name: {
          $regex: queryStr.keyword,
          $options: "i",
        },
      }
    : {};

  return query.find({ ...keyword });
}

function filter(query) {
  let queryData = {};
  // search
  if (query.keyword) {
    queryData.name = { $regex: query.keyword, $options: "i" };
  }
  // category filter
  if (query.category) {
    const categories = query.category
      .split(",")
      .map((category) => category.trim());
    queryData.category = { $in: categories };
  }
  // price filter
  if (query.minPrice && query.maxPrice) {
    queryData.price = {
      $gte: parseInt(query.minPrice),
      $lte: parseInt(query.maxPrice),
    };
  }
  // rating filtering
  if (query.rating) {
    queryData.ratings = { $gte: parseInt(query.rating) };
  }
  // height filtering
  if (query.height) {
    const heightArr = query.height.split(",").map((arr) => arr.trim());
    queryData.height = { $in: heightArr };
  }
  // size filterin
  if (query.sizes) {
    const sizesArr = query.sizes.split(",").map((arr) => arr.trim());
    queryData.stock = {
      $elemMatch: {
        size: { $in: sizesArr },
      },
    };
  }
  // color filtering
  if (query.color) {
    queryData.color = { $regex: query.color, $options: "i" };
  }

  return queryData;
}

module.exports = {
  search,
  filter,
};
