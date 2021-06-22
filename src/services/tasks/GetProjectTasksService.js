const { isBefore } = require('date-fns');

const TaskRepository = require('../../repositories/TaskRepository');

const AppError = require('../../errors/AppError');

class GetProjectTasksService {
  constructor() {
    this.TaskRepository = TaskRepository;
  }

  async execute({ projectId }) {
    if (!projectId) {
      throw new AppError('Please, inform the projectId.', 400);
    }

    const tasks = await this.TaskRepository.findProjectTasks({ projectId });

    const summary = {
      completed: 0,
      late: 0,
      total: tasks.length,
    };

    for (let i = 0; i < tasks.length; i += 1) {
      const task = tasks[i];

      if (task.done) {
        summary.completed += 1;
      } else if (isBefore(task.dueDate, new Date())) {
        summary.late += 1;
      }
    }

    return { tasks, summary };
  }
}

module.exports = new GetProjectTasksService();
