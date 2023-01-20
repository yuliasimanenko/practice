const express = require('express');

const PORT = 4000;


const app = express();


const data = require('./views/terms.json')


app.get('/terms/', ((req, res)=>{
    // res.header("Content-Type",'application/json');
    // res.send(JSON.stringify(data));
    res.json(data)
}));


app.get('/map/', ((req, res)=>{
    res.sendFile(__dirname + '/views/map.png');
}));

app.listen(PORT, ()=> console.log(`serever started on port ${PORT}`))
