const checklistRouter = require('./src/routes/checklist');
const express = require('express');

//app recebendo o express com o seus metodos
const app = express();

//me permite enviar objeto json
app.use(express.json());

//usando a rota
app.use(checklistRouter);

//adicionando a porta onde o server vai escutar
app.listen(3000, () => {
  console.log('Server running on port 3000 🚀');
});
