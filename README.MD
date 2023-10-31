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

