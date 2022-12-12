// começando a primeira rota
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Checklist = require('../models/checklist.js');

//buscando
router.get('/checklists', async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    res.status(200).json(checklists);
  } catch (error) {
    res.status(500).json(`Erro ao buscar as checklists ${error}`);
  }
});

//criando checklist.
router.post('/checklists', async (req, res) => {
  let { name } = req.body;
  try {
    let checklist = await Checklist.create({ name });
    res.status(200).json(checklist);
  } catch (error) {
    if (!name) {
      res.status(422).json(`Nome não foi encontrado`);
    } else {
      res.status(422).json(`Erro ao cadastrar tarefa : ${error}`);
    }
  }
});

//esperando receber um paremetro id;
//params é os paremetros da URL
router.get('/checklists/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json(`Erro ao buscar a checklist ${error}`);
  }
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
