const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const path = require('path');
const client = require('axios');
const { response } = require('express');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "views")));
app.use('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    req.currentUser = "dubeypiyush@microsoft.com";
    next()
})
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    client.get('https://mocki.io/v1/1df3d356-af3d-457a-a6bf-1c31c0d1dd73')
        .then(apiResp => {
            console.log(apiResp.data)
            res.render('index', { active: "index", data: apiResp.data, currentUser: req.currentUser });
        })
        .catch(err => {
            console.log(err)
            res.render('error')
        })

});

app.get('/detail/:hackathonId', (req, res) => {
    let hackathonId = req.params.hackathonId;
    client.get('https://mocki.io/v1/b3c7624f-7e32-41c1-9f1a-c941546ae3ff')
        .then(apiResp => {
            console.log(apiResp.data)
            res.render('index', { active: "detail", data: apiResp.data, currentUser: req.currentUser });
        })
        .catch(err => {
            console.log(err)
            res.render('error')
        })

})

app.get('/detail/:hackathonId/overview/:hackId', (req, res) => {
    client.get('https://mocki.io/v1/a278b51b-6e40-4607-a4c5-be77d1124c47')
        .then(apiResp => {
            console.log(apiResp.data)
            res.render('index', { active: "hackdetails", data: apiResp.data, currentUser: req.currentUser });
        })
});

app.get('/index', (req, res) => {
    res.render('/', { active: "index" });
});

app.get('/registerHack', (req, res) => {
    res.render('index', { active: "registerHack", currentUser: req.currentUser });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

