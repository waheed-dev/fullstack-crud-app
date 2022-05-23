const Task = require('../models/task')
const getTasks = async (req,res) => {
    const data = await Task.find({})
    res.status(200).send(data)
}
const singleTask = (req,res) => {
    res.json({id :req.params.id})
}
const insertTask = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const updateTask = (req,res) => {
    res.send('update task')
}
const deleteTask = (req,res) => {
    res.send('delete task')
}
module.exports = {getTasks,singleTask,insertTask,deleteTask,updateTask}
