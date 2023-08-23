const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");

const getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find().limit(1000);
  res.status(200).json({ product: allProducts });
});

const getOneProductByName = asyncHandler(async (req, res) => {
  const searchedProduct = await Product.find({
    name: { $eq: req.params.name },
  });
  res.status(201).json({ product: searchedProduct });
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, company, price, colors, image, category, isFeatured } =
    req.body;

  if (
    !name &&
    !company &&
    !price &&
    !colors &&
    !image &&
    !category &&
    !isFeatured
  ) {
    res.status(400);
    throw new Error("Fields can not be empty");
  }

  const product = await Product.create({
    name: name,
    company: company,
    price: price,
    colors: colors,
    image: image,
    category: category,
    isFeatured: isFeatured,
  });
  res.status(200).json({ product: product });
});

const updateProductByName = asyncHandler(async (req, res) => {
  if (!req.params.oldName && !req.params.updateName) {
    res.status(400);
    throw new Error("Old and Update name can not be empty");
  }
  const product = await Product.updateMany(
    { name: { $eq: req.params.oldName } },
    { $set: { name: req.params.updateName } }
  );
  res
    .status(200)
    .json({
      product: product.modifiedCount !== 0 ? "Updated☺!!" : "Not Found",
    });
});

const deleteProductByID = asyncHandler(async (req, res) => {
  if (!req.params.name) {
    res.statusCode(400);
    throw new Error("Name can not be found");
  }
  const product = await Product.deleteMany({ name: { $eq: req.params.name } });
  res.status(200).json({ product: product });
});

module.exports = {
  getAllProducts,
  getOneProduct: getOneProductByName,
  createProduct,
  updateProductByID: updateProductByName,
  deleteProductByID,
};
