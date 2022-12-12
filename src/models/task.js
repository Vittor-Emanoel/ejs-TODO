const mongoose = require('mongoose');

//modelos
const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true,
  },
});

exports.modules = mongoose.model('Task', taskSchema);
