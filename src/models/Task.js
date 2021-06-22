const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
      default: new Date(),
    },
    done: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('Task', TaskSchema);
