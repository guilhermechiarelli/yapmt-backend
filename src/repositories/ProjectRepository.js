const Project = require('../models/Project');

class ProjectRepository {
  constructor() {
    this.ormRepository = Project;
  }

  async findById({ id = String }) {
    const project = await this.ormRepository.findById(id);

    return project;
  }

  async create({ name = String }) {
    const project = await this.ormRepository.create({ name });

    return project;
  }

  async updateOne({ id = String, name = String }) {
    const project = await this.ormRepository.updateOne(
      { _id: id },
      { name },
      { new: true }
    );

    return project;
  }

  async deleteOne({ id = String }) {
    await this.ormRepository.deleteOne({ _id: id });

    return null;
  }

  async findAllProjects() {
    const projects = await this.ormRepository.find();

    return projects;
  }
}

module.exports = new ProjectRepository();
