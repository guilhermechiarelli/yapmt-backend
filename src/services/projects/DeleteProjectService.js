const ProjectRepository = require('../../repositories/ProjectRepository');
const TaskRepository = require('../../repositories/TaskRepository');

const AppError = require('../../errors/AppError');

class DeleteProjectService {
  constructor() {
    this.ProjectRepository = ProjectRepository;
    this.TaskRepository = TaskRepository;
  }

  async execute({ id }) {
    if (!id) {
      throw new AppError('Plase, inform the projectId.', 400);
    }

    await this.ProjectRepository.deleteOne({ id });
    await this.TaskRepository.deleteMany({ projectId: id });

    return null;
  }
}

module.exports = new DeleteProjectService();
