// começando a primeira rota
const express = require('express');

const router = express.Router();

router.get('/checklists', (req, res) => {
  console.log('Olá');
  res.json({ title: 'não se atrasar', isCompleted: true });
});

//cadastra o que está no body.
router.post('/checklists', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

//esperando receber um paremetro id;
//params é os paremetros da URL
router.get('/checklists/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`Id ${req.params.id}`);
});

router.put('/checklists/:id', (req, res) => {
  console.log(req.body);
  res.send(`Put ${req.params.id}`);
});

router.delete('/checklists/:id', (req, res) => {
  console.log(req.body);
  res.send(`Put ${req.params.id}`);
});

module.exports = router;
