const TaskRepository = require('../../repositories/TaskRepository');

const AppError = require('../../errors/AppError');

class DeleteTaskService {
  constructor() {
    this.TaskRepository = TaskRepository;
  }

  async execute({ id }) {
    if (!id) {
      throw new AppError('Please, inform the taskId', 400);
    }

    await this.TaskRepository.deleteOne({ id });

    return null;
  }
}

module.exports = new DeleteTaskService();
