const mongoose = require('mongoose');
const { format, parse } = require('date-fns');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String, required: true },
  data: {
    type: Date,
    required: true,
  },
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
