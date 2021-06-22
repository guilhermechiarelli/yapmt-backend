const TaskRepository = require('../../repositories/TaskRepository');

const AppError = require('../../errors/AppError');

class GetTaskService {
  constructor() {
    this.TaskRepository = TaskRepository;
  }

  async execute({ id }) {
    const task = await this.TaskRepository.findById({ id });

    if (!task) {
      throw new AppError('Task not found.', 400);
    }

    return { task };
  }
}

module.exports = new GetTaskService();
