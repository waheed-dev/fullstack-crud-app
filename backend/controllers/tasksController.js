
const getTasks = (req,res) => {
    res.send('here are your')
}
const singleTask = (req,res) => {
    res.json({id :req.params.id})
}
const insertTask = (req,res) => {
    res.json(req.body)
}
const updateTask = (req,res) => {
    res.send('update task')
}
const deleteTask = (req,res) => {
    res.send('delete task')
}
module.exports = {getTasks,singleTask,insertTask,deleteTask,updateTask}
