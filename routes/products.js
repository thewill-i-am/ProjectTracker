const express = require('express');
const router = express.Router();

let data = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' }
];

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = data.find(p => p.id === parseInt(id));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

router.post('/', (req, res) => {
  const product = req.body;
  const ultimoObjeto = data[data.length - 1];
  if (ultimoObjeto === undefined) {
    product['id'] = 1;
  } else {
    product['id'] = ultimoObjeto.id + 1;
  }
  data.push(product);
  res.json(product);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const index = data.findIndex(p => p.id === parseInt(id));

  if (index !== -1) {
    data[index].name = name;
    res.json(data[index]);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const index = data.findIndex(p => p.id === parseInt(id));
  if (index !== -1) {
    const deletedProduct = data.splice(index, 1);
    res.json(deletedProduct[0]);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

module.exports = router;
