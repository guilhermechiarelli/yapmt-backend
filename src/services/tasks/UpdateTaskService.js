const TaskRepository = require('../../repositories/TaskRepository');

const AppError = require('../../errors/AppError');

class UpdateTaskService {
  constructor() {
    this.TaskRepository = TaskRepository;
  }

  async execute({ taskId, description, owner, dueDate, done }) {
    if (!taskId) {
      throw new AppError('Please, inform the correct fields.', 400);
    }

    const task = await this.TaskRepository.updateOne({
      id: taskId,
      description,
      owner,
      dueDate,
      done,
    });

    return { task };
  }
}

module.exports = new UpdateTaskService();
