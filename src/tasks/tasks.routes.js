const router = require('express').Router();
const {
    getAllTasksService,
    getTaskByIdService,
    postTaskService,
    deleteTaskService,
    updateTaskService
} = require('./tasks.services');

router.get('/tasks', getAllTasksService);
router.get('/tasks/:id', getTaskByIdService);
router.post('/tasks', postTaskService);
router.delete('/tasks/:id', deleteTaskService);
router.put('/tasks/:id', updateTaskService);

module.exports = {router}