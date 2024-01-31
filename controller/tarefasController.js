const Task = require('../models/tarefas');

const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json({ success: true, message: 'Tarefa criada com sucesso' });
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ success: false, error: 'Erro interno do servidor' });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({tasks });
  } catch (error) {
    console.error('Erro ao obter tarefas:', error);
    res.status(500).json({error: 'Erro interno do servidor' });
  }
};

const getCompletedTasks = async (req, res) => {
  try {
    const completedTasks = await Task.find({ completed: true });
    res.json(completedTasks);
  } catch (error) {
    console.error('Erro ao obter tarefas completadas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};


const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = req.body;

    const result = await Task.findByIdAndUpdate(taskId, updatedTask, { new: true });

    if (!result) {
      return res.status(404).json({ success: false, message: 'Tarefa não encontrada' });
    }

    res.json({ success: true, message: 'Tarefa atualizada com sucesso', task: result });
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    res.status(500).json({ success: false, error: 'Erro interno do servidor' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const result = await Task.findByIdAndDelete(taskId);

    if (!result) {
      return res.status(404).json({ success: false, message: 'Tarefa não encontrada' });
    }

    res.json({ success: true, message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    res.status(500).json({ success: false, error: 'Erro interno do servidor' });
  }
};

module.exports = { createTask, getAllTasks, updateTask, deleteTask, getCompletedTasks };
