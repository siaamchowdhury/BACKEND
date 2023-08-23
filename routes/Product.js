const express = require("express");
const route = express.Router();

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProductByID,
  deleteProductByID,
} = require("../controllers/Product");

route.route("/").get(getAllProducts);

route.route("/:name").get(getOneProduct).post(createProduct);

route.route("/:oldName/:updateName").put(updateProductByID);

route.route("/:name").delete(deleteProductByID);

// route.route("/:name").put(updateProductByID).delete(deleteProductByID);

module.exports = route;
