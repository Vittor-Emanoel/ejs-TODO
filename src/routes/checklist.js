// começando a primeira rota
const express = require('express');

const router = express.Router();

router.get('/checklists', (req, res) => {
  console.log('Olá');
  res.json({ title: 'não se atrasar', isCompleted: true });
});

router.post('/checklists', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

module.exports = router;
