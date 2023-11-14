const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");

class ProductsService{

  constructor(){
    this.products = [];
    this.generete();
  }

  generete(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {

      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });

    }
  }

  async create({
    name,
    price,
    image,
  }){
    const newProduct = {id: faker.datatype.uuid(), name, price, image};
    this.products.push(newProduct);
    return newProduct;
  }
  async find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }
  async findOne(id){
    const product =  this.products.find( data => data.id == id);
    if(!product){
      throw boom.notFound('Product not found.');
    }
    if(product.isBlock){
      throw boom.conflict('Product is block.');
    }
    return product
  }
  async update(id, data){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found.');
    }
    const oldProduct = this.products[index];
    this.products[index] = {...oldProduct, ...data};
    return this.products[index];
  }
  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found.');
    }
    this.products.splice(index, 1);
    return {message: "Ok", id: id}
  }
}

module.exports = ProductsService;
