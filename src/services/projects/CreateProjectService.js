const ProjectRepository = require('../../repositories/ProjectRepository');
const AppError = require('../../errors/AppError');

class CreateProjectService {
  constructor() {
    this.ProjectRepository = ProjectRepository;
  }

  async execute({ name }) {
    if (!name) {
      throw new AppError('Please, inform the project name.', 400);
    }

    const project = await this.ProjectRepository.create({ name });

    return { project };
  }
}

module.exports = new CreateProjectService();
