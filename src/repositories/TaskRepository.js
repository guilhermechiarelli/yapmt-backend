const Task = require('../models/Task');

class TaskRepository {
  constructor() {
    this.ormRepository = Task;
  }

  async findById({ id = String }) {
    const task = await this.ormRepository.findById(id);

    return task;
  }

  async create({
    projectId = String,
    description = String,
    owner = String,
    dueDate = Date,
  }) {
    const task = await this.ormRepository.create({
      projectId,
      description,
      owner,
      dueDate,
    });

    return task;
  }

  async updateOne({ id, description, owner, dueDate, done }) {
    const update = {};

    if (description) {
      update.description = description;
    }

    if (owner) {
      update.owner = owner;
    }

    if (dueDate) {
      update.dueDate = dueDate;
    }

    if (typeof done === 'boolean') {
      update.done = done;
    }

    const task = await this.ormRepository.findOneAndUpdate(
      { _id: id },
      update,
      { new: true }
    );

    return task;
  }

  async deleteOne({ id = String }) {
    await this.ormRepository.deleteOne({ _id: id });

    return null;
  }

  async findProjectTasks({ projectId = String }) {
    const tasks = await this.ormRepository.find({ projectId });

    return tasks;
  }

  async deleteMany({ projectId = String }) {
    await this.ormRepository.deleteMany({ projectId });

    return null;
  }
}

module.exports = new TaskRepository();
