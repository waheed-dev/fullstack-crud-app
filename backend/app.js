
const express = require('express')
const app = express()
const tasks = require('../backend/routes/getAllTasksRoute')
const connectDB = require('./db/connection')
require('dotenv').config()
app.use(express.json())
app.use(tasks)
const uri = process.env.MONGO_URI

const start = async () => {
    try {
        await connectDB(uri)
        app.listen(5000,() => {
            console.log('running');
        })
    } catch (err) {
console.log(err);
    }
}
start()
