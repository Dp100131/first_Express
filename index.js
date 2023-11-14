const express = require("express");
const routerApi = require("./Routes");
const { logErrors, errorHandler, boomErrorHandler} = require("./Middlewares/error.handler");
const app = express();
const port ='3000'
app.set('PORT', port)

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello world from express.</h1>');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('<h1>Hello world from nuevo endpoint.</h1>');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`My port ${port}.`)
});
