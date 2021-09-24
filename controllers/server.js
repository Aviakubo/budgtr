// Express required to run app
const express = require('express');
const app = express();
const port = 3000;
const budget = require('../models/budget.js');

app.use(express.urlencoded({ extended:false}));
var bodyParser = require('body-parser');
app.use(express.static('public'));

// INDEX
// app.get
app.get('/budget', (req, res) => {
    res.render('index.ejs', {budgetTable: budget});
});

// NEW
// app.get
app.get('/budget/new', (req, res) => {
    res.render('new.ejs');
});

// CREATE
// app.post
app.post('/budget', (req, res) => {
    console.log(req.body);
    budget.push(req.body);
    res.redirect('/budget');
});

// SHOW
// app.get
app.get('/budget/:indexOfBudgetArray', (req,res) => {
    res.render('show.ejs', {
        budgetTable: budget[req.params.indexOfBudgetArray]
    });
});

// Express Web Server port - app.listen
app.listen(port, ()=> {
    console.log(`Listening on port`, port)
});