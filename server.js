const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "views")));
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    console.log("index page")
    res.render('index',{ active: "index" });
});

app.get('/index', (req, res) => {
    res.render('index', { active: "index" });
});

app.get('/create', (req, res) => {
    res.render('index', { active: "create" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

