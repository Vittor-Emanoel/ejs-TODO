const checklistRouter = require('./src/routes/checklist');
const express = require('express');
const db = require('./config/db.config');

//app recebendo o express com o seus metodos
const app = express();

//me permite enviar objeto json
app.use(express.json());

//resposta da promise

db.on('error', console.log.bind(console, 'Erro ao conectar com o banco'));

db.once('open', () => {
  console.log('Conexão com o banco feito com sucesso');
});

//usando a rota
app.use(checklistRouter);

//adicionando a porta onde o server vai escutar
app.listen(3000, () => {
  console.log('Server running on port 3000 🚀');
});
