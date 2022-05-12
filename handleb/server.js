const express = require('express');
const handlebars = require('express-handlebars');
const { Router } = express;
const Products = require('./class/class');
const routerProd = express.Router();
const app = express();
const router = Router();

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

const prod = new Products();
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/productos', routerProd);
app.use(express.json());
const PORT = 8080;

app.get('/', (req, res) => {
  res.render('form');
});
routerProd

  .get('/', (req, res) => {
    const listProd = prod.getAllProducts;
    console.log(listProd);
    res.render('products', { listProd });
  })
  .post('/', (req, res) => {
    const newProduct = prod.addNewProduct(req.body);
    res.redirect('/');
  });
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
server.on('error', (err) => {
  throw new Error(`Error en el servidor: ${err}`);
});
