const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config()
//Database Connection
mongoose.connect(process.env.DATABASE, { useNewUrlParser : true}, (err)=>{
    if(err) throw err;
    console.log("Database Connected!!!!!!!!")
})
//Routes
const createRoutes = require('./routes/create');
const readRoutes = require('./routes/read');
const updateRoutes = require('./routes/update');
const deleteRoutes = require('./routes/delete');

//Views
app.use(bodyParser.json());
app.use('/create', createRoutes);
app.use('/read', readRoutes);
app.use('/update', updateRoutes);
app.use('/delete', deleteRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running on Port: ${process.env.PORT}`)
});