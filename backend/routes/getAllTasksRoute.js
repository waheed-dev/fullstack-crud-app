const express = require('express')
const {getTasks,singleTask, insertTask, updateTask, deleteTask} = require('../controllers/tasksController')
const router = express.Router()
router.route('/api/v1/tasks').get(getTasks)
router.route('/api/v1/tasks').post(insertTask)
router.route('/api/v1/tasks/:id').get(singleTask)
router.route('/api/v1/tasks/:id').patch(updateTask)
router.route('/api/v1/tasks/:id').delete(deleteTask)

module.exports = router
