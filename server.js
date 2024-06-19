const express = require("express");
const app = express();

const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')

app.use(express.json())

app.use('/api/rooms',roomsRoute)
app.use('/api/users',usersRoute)

const port = process.env.PORT || 3006;
app.listen(port,()=> console.log("hi"));