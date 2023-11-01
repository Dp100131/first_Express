/* const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.listen(port, () =>{
  console.log("My port: " + port);
}); */
const express = require("express");
const app = express();
const port ='3000'
app.set('PORT', port)

app.get('/', (req, res) => {
  res.send('<h1>Hello world from express.</h1>');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('<h1>Hello world from nuevo endpoint.</h1>');
});

app.get('/products', (req, res) => {
  res.json({
    status: 200,
    body: 'Ok'
  });
});

app.listen(port, () => {
  console.log(`My port ${port}.`)
});
