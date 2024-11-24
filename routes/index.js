const express = require('express');
const {
  createTask,
  getTasks,
  getTaskById,
  completeTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const router = express.Router();

router.post('/', createTask);
router.get('/', getTasks);
router.get('/getTask/:id', getTaskById);
router.patch('/:id/complete', completeTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
