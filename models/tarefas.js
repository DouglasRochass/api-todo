const mongoose = require('mongoose');
const { format, parse } = require('date-fns');

const taskSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  prioridade: { type: String, required: true },
  categoria: {type: String, required: true},
  data: {
    type: Date,
    required: true,
  },
  completado: { type: Boolean, default: false },

});

const lista = mongoose.model('lista', taskSchema);

module.exports = lista;
