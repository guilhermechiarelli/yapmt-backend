const ProjectRepository = require('../../repositories/ProjectRepository');
const AppError = require('../../errors/AppError');

class GetProjectService {
  constructor() {
    this.ProjectRepository = ProjectRepository;
  }

  async execute({ id }) {
    const project = await this.ProjectRepository.findById({ id });

    if (!project) {
      throw new AppError('Project not found.', 400);
    }

    return { project };
  }
}

module.exports = new GetProjectService();
