const GetProjectService = require('../services/projects/GetProjectService');
const GetAllProjectsService = require('../services/projects/GetAllProjectsService');
const CreateProjectService = require('../services/projects/CreateProjectService');
const DeleteProjectService = require('../services/projects/DeleteProjectService');

class ProjectController {
  async get(req, res) {
    const { id } = req.params;

    const { project } = await GetProjectService.execute({ id });

    return res.status(200).json(project);
  }

  async index(req, res) {
    const { projects } = await GetAllProjectsService.execute();

    return res.status(200).json(projects);
  }

  async store(req, res) {
    const { name } = req.body;

    const { project } = await CreateProjectService.execute({ name });

    return res.status(201).json(project);
  }

  async remove(req, res) {
    const { id } = req.params;

    await DeleteProjectService.execute({ id });

    return res.status(204).json();
  }
}

module.exports = new ProjectController();
