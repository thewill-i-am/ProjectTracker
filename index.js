const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const productsRouter = require('./routes/products');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/products', productsRouter);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('La aplicación está escuchando en el puerto 3000...');
});
