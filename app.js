const express = require('express');
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));




//# Startups

//server
require('./startups/server')(app)
//db
require('./startups/db')()
//cors
require('./startups/cors')(app)
//route
require('./startups/routes')(app)

