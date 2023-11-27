const express = require("express");

const ProductsService = require("../Services/product.service");
const validatorHandler = require("../Middlewares/validator.handler");
const { createProductSchema, updateProductSchema, getProductSchema } = require("../schemas/product.schema");

const router = express.Router();
const productsService = new ProductsService();

router.get('/',  async (req, res) => {

  const products = await productsService.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send("Estoy en filter");
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {

  try {
    const { id } = req.params;
    const product = await productsService.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }

});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {

  const body = req.body;
  const newProduct = await productsService.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct
  });

});

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const product = await productsService.update(id, body);
    res.json({
      message: 'update pacth',
      id: id,
      data: product
    })
  } catch (error) {
    res.status(404).json({
      message: error.message,
      id: id
    })
  }

});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await productsService.delete(id);
  res.json({
    product
  })
});

module.exports = router;
