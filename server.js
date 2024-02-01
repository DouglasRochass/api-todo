const express = require('express');
const mongoose = require('mongoose');
const taskController = require('./controller/tarefasController');
const cors = require('cors')
require('dotenv').config()


const uri = process.env.url


const app = express();
const port = 3001;

app.use(cors({ origin: '*' }));
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((error) => {
    console.error('Erro na conexão ao MongoDB:', error);
  });

// Rotas
app.post('/task', taskController.createTask);
app.get('/tasks', taskController.getAllTasks);
app.put('/tasks/:id', taskController.updateTask);
app.delete('/tasks/:id', taskController.deleteTask);
app.get('/tasks/:prioridade', taskController.getPrioridade);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
