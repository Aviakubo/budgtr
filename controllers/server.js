// Express required to run app
const express = require('express');
const app = express();
const port = 3000;

const budget = require('../models/budget.js');

// INDEX
// app.get
app.get('/budget', (req, res) => {
    res.render('index.ejs');
});

// NEW
// app.get
app.get('/budget/new', (req, res) => {
    res.send('this should be the new');
});

// CREATE
// app.post

// SHOW
// app.get
app.get('/budget/:indexOfBudgetArray', (req,res) => {
    res.send('this should be the show page');
});

// Express Web Server port - app.listen
app.listen(port, ()=> {
    console.log(`Listening on port`, port)
});