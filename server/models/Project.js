const mongoose = require('mongoose');

// mongoose schema
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed']
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    // linking to client model
    ref: 'Client',
  }
});

module.exports = mongoose.model('Project', projectSchema);