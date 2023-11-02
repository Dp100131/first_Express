# Config

## gitignore.io
[gitignore](https://www.toptal.com/developers/gitignore)

## editoConfig
En archivos del curso

## Linter
En archivos del curso

## package.json init
```
{
  "name": "backexpress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev":"nodemon index.js",
    "start":"node index.js",
    "lint":"eslint",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
## instalación de paquetes:
```
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```
## instalación de express:
```
npm i express
```

# My first app with express
```
const express = require("express");
const app = express();
const port ='3000'
app.set('PORT', port)
app.get('/', (req, res) => {
  res.send('<h1>Hello world from express.</h1>');
});

app.listen(port, () => {
  console.log(`My port ${port}.`)
});
```
# Routing

# API RESTful

### REST: Representational State Transfer

- GET: Obtener data.
- PUT: Actualizar.
- POST: Crear.
- DELETE: ELiminar.

## Query params
api.example.com/products
api.example.com/products?page=1
api.example.com/products?limit=10&offset=0
api.example.com/products?region=USA
api.example.com/products?region=USA&brand=XYZ

# fake data
```
npm i @faker-js/faker
```

# Router

```
const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get('/', (req, res) => {})
```
# Post
