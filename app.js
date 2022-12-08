const express = require('express');

//app recebendo o express com o seus metodos
const app = express();

//criando a primeira rota com o metodos do express
app.get('/', (req, res) => {
  res.send('<h1>Minha lista de tarefas</h1>');
});

//adicionando a porta onde o server vai escutar
app.listen(3000, () => {
  console.log('Server running on port 3000 🚀');
});
