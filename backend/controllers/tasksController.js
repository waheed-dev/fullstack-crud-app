
const Task = require('../models/task')
const getTasks = async (req,res) => {
    try {
        const data = await Task.find({})
        res.status(200).send(data)
    } catch (error) {
        res.status(500).json({Response : error.message})
    }

}
const singleTask = async (req,res) => {
    try {
        const FindOne = await Task.findOne({_id : req.params.id})
        res.status(200).json({res : FindOne})
        if (!FindOne) {
            res.status(404).send('no task with the matching id found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}
const insertTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
    res.status(201).json({task})
    } catch (error) {
        res.status(500).json({Response : error.message})
    }

}
const updateTask = (req,res) => {
    res.send('update task')
}
const deleteTask = (req,res) => {
    res.send('delete task')
}
module.exports = {getTasks,singleTask,insertTask,deleteTask,updateTask}
