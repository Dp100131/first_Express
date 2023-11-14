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
# POST
Add middleware
```
app.use(express.json());
```
# Patch and PUT
PUT actualizar todos los campos.
Pacth actualizar algún campo del producto.

# Delete
Solo necesito el id para eliminar el elemento.

# HTTP response status codes
- 100 - 199: Informational
- 200 - 299: Successful responses
- 300 - 399: Redirects
- 400 - 499: Client errors
- 500 - 599: Server errors
[status codes](https://http.cat/)

# Middlewares
request -> Middleware -> Middleware -> Middleware -> Response
request -> Middleware -> Middleware /->

Se depen poner del routing

# Boom
Para el manejo de errores
```
npm i @hapi/boom
```
# Joi
Validación de datos
```
npm i joi
```
