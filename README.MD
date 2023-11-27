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
# [Middlewares populares](https://platzi.com/new-home/clases/2485-backend-nodejs/41762-middlewares-populares-en-expressjs/)

# CORS
Ver más a fondo el tema de la whitelist.
```
npm i cors
```
# Bases de datos

## Docker
- Correr:
```
docker-compose up -d postgres
```
- Ver los servicios activos:
```
docker-compose ps
```
- Kill service:
```
docker-compose down
```
# Containers:
Caracteristicas:
stateless.
para persistir hay que agrearle un volumen.
```
volumes:
  - ./postgres_data:/var/lib/postgresql/data
```
para otras DB revisar: hub.docker.com
# Conectar vía terminal
```
docker-compose exec postgres bash
```
```
psql -h localhost -d my_store -U daniel
```
Para salir de base de datos:
```
\q
```
Para salir del contenedor:
```
exit
```
# Correr pgadmin
```
docker-compose up -d pgadmin
```
Más info:
```
docker ps // obtener el id de los contenedores
docker inspect ID_DEL_CONTAINER
```
# Integración de node con postgres
```
npm install pg
```
#
Conexiones tipo Client y de tipo pool.
COn el pool no debe estar autentificando siempre.

# Variables de entorno:
