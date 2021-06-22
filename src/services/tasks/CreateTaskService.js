const TaskRepository = require('../../repositories/TaskRepository');

const AppError = require('../../errors/AppError');

class CreateTaskService {
  constructor() {
    this.TaskRepository = TaskRepository;
  }

  async execute({ projectId, description, owner, dueDate }) {
    if (!projectId || !description || !owner || !dueDate) {
      throw new AppError('Please, inform the correct fields.', 400);
    }

    const task = await this.TaskRepository.create({
      projectId,
      description,
      owner,
      dueDate,
    });

    return { task };
  }
}

module.exports = new CreateTaskService();
