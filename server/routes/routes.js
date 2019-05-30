const {
  getAllItems,
  getMensHoodies,
  getMensJoggers,
  getMensItems,
  getMensShirts,
  getMensSweaters,
  getMensSwim,
  getDress,
  getWomansItems,
  getWomansPants,
  getWomansShorts,
  getWomansSwim,
  getWomansTops,
  getCart,
  addToCart
} = require("../controller/itemController");

module.exports = app => {
  app.get("/api/allItems", getAllItems);
  app.get("/api/mens/hoodies", getMensHoodies);
  app.get("/api/mens/joggers", getMensJoggers);
  app.get("/api/mens", getMensItems);
  app.get("/api/mens/shirts", getMensShirts);
  app.get("/api/mens/sweater", getMensSweaters);
  app.get("/api/mens/swimwear", getMensSwim);
  app.get("/api/womens/swimwear", getDress);
  app.get("/api/women", getWomansItems);
  app.get("/api/womens/pants", getWomansPants);
  app.get("/api/womens/shorts", getWomansShorts);
  app.get("/api/womens/swimwear", getWomansSwim);
  app.get("/api/womens/tops", getWomansTops);
  app.get("/api/cart", getCart);
  app.post("/api/cart", addToCart);
};
