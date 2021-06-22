const GetTaskService = require('../services/tasks/GetTaskService');
const GetProjectTasksService = require('../services/tasks/GetProjectTasksService');
const CreateTaskService = require('../services/tasks/CreateTaskService');
const UpdateTaskService = require('../services/tasks/UpdateTaskService');
const DeleteTaskService = require('../services/tasks/DeleteTaskService');

class TaskController {
  async get(req, res) {
    const { id } = req.params;

    const { task } = await GetTaskService.execute({ id });

    return res.status(200).json(task);
  }

  async index(req, res) {
    const { projectId } = req.params;

    const { tasks, summary } = await GetProjectTasksService.execute({
      projectId,
    });

    return res.status(200).json({ tasks, summary });
  }

  async store(req, res) {
    const { projectId } = req.params;
    const { description, owner, dueDate } = req.body;

    const { task } = await CreateTaskService.execute({
      projectId,
      description,
      owner,
      dueDate,
    });

    return res.status(201).json(task);
  }

  async update(req, res) {
    const { taskId } = req.params;
    const { description, owner, dueDate, done } = req.body;

    const { task } = await UpdateTaskService.execute({
      taskId,
      description,
      owner,
      dueDate,
      done,
    });

    return res.status(200).json(task);
  }

  async remove(req, res) {
    const { id } = req.params;

    await DeleteTaskService.execute({ id });

    return res.status(204).json();
  }
}

module.exports = new TaskController();
