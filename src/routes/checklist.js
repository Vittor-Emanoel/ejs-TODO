// começando a primeira rota
const express = require('express');

const router = express.Router();

router.get('/checklists', (req, res) => {
  console.log('Olá');
  res.json({ title: 'não se atrasar', isCompleted: true });
});

module.exports = router;
