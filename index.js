const express = require('express')
const {mongoose} = require ('./config/database')
const app = express()
const port = 3000


const {usersRouter} = require('./app/controllers/UsersController')



app.use(express.json())
app.use('/users', usersRouter)

app.listen(port,function(){
    console.log('connecting to port', port)
})
