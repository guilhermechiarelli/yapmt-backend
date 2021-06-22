const { Router } = require('express');

const ProjectController = require('../controllers/ProjectController');
const TaskController = require('../controllers/TaskController');

const router = Router();

router.get('/project/:id', ProjectController.get);
router.get('/projects', ProjectController.index);
router.post('/project', ProjectController.store);
router.delete('/project/:id', ProjectController.remove);

router.get('/task/:id', TaskController.get);
router.get('/tasks/:projectId', TaskController.index);
router.post('/task/:projectId', TaskController.store);
router.patch('/task/:taskId', TaskController.update);
router.delete('/task/:id', TaskController.remove);

module.exports = router;
