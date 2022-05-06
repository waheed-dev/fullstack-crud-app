require('./db/connection')
const express = require('express')
const app = express()
const tasks = require('../backend/routes/getAllTasksRoute')
app.use(express.json())
app.use(tasks)

app.listen(5000,() => {
    console.log('running');
})
