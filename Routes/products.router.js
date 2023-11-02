const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get('/', (req, res) => {

  const { size } = req.query;

  const limit = parseInt(size) || 10;

  const products = [];
  for (let index = 0; index < limit; index++) {

    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });

  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send("Estoy en filter");
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: "product 1",
    price: 100
  });
})

module.exports = router;
