const ProjectRepository = require('../../repositories/ProjectRepository');

class GetAllProjectService {
  constructor() {
    this.ProjectRepository = ProjectRepository;
  }

  async execute() {
    const projects = await this.ProjectRepository.findAllProjects();

    return { projects };
  }
}

module.exports = new GetAllProjectService();
