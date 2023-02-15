const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const path = require('path');
const client = require('axios');
const { response } = require('express');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "views")));
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    client.get('https://mocki.io/v1/1df3d356-af3d-457a-a6bf-1c31c0d1dd73')
    .then(apiResp=>{
        console.log(apiResp.data)
        res.render('index',{ active: "index", data: apiResp.data });
    })
    .catch(err=>{
        console.log(err)
        res.render('error')
    })
    
});

app.get('/detail/:hackathonId', (req, res) => {
    let hackathonId = req.params.hackathonId;
    client.get('https://mocki.io/v1/b3c7624f-7e32-41c1-9f1a-c941546ae3ff')
    .then(apiResp=>{
        console.log(apiResp.data)
        res.render('index',{ active: "detail", data: apiResp.data });
    })
    .catch(err=>{
        console.log(err)
        res.render('error')
    })

})
app.get('/index', (req, res) => {
    res.render('/', { active: "index" });
});

app.get('/create', (req, res) => {
    res.render('index', { active: "create" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

