// começando a primeira rota
const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist.js');

//buscando
router.get('/checklists', async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    // res.status(200).json(checklists);
    res.status(200).render('checklists/index.ejs', { checklists: checklists });
  } catch (error) {
    res
      .status(200)
      .render('pages/error', { error: 'Erro ao exibir as Listas' });
    // res.status(500).json(`Erro ao buscar as checklists ${error}`);
  }
});

//criando checklist.
router.post('/checklists', async (req, res) => {
  let { name } = req.body.checklist;
  try {
    await Checklist.create({ name });
    res.status(200).redirect('/checklists');
  } catch (error) {
    if (!name) {
      res.status(400).json(`Nome não foi encontrado`);
    } else {
      res.status(422).json(`Erro ao cadastrar tarefa : ${error}`);
    }
  }
});

router.get('/checklists/new', async (req, res) => {
  try {
    let checklist = new Checklist();
    res.status(200).render('checklist/new.ejs', { checklist: checklist });
  } catch (error) {
    res
      .status(500)
      .render('pages/error', { error: 'Erro ao carregar o formulario' });
  }
});

//esperando receber um paremetro id;
//params é os paremetros da URL
router.get('/checklists/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    // res.status(200).json(checklist);
    res.status(200).render('checklists/show.ejs', { checklist: checklist });
  } catch (error) {
    // res.status(500).json(`Erro ao buscar a checklist ${error}`);
    res
      .status(500)
      .render('pages/error', { error: 'Erro ao exibir as Listas de Tarefas' });
  }
});

//atualizando
router.put('/checklists/:id', async (req, res) => {
  let { name } = req.body;
  try {
    let checklist = await Checklist.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(`Erro ao atualizar a checklist ${error}`);
  }
});

router.delete('/checklists/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.status(204).json(checklist);
  } catch (error) {
    res.status(500).json(`Erro ao buscar ao checklist ${error}`);
  }
});

module.exports = router;
