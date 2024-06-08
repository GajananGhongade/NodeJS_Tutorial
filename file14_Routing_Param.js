const express = require('express');
const app = express()
// console.log(app)

app.get('', (req, res)=>{
    console.log("data sent by browser", req.query)
    console.log("data sent by browser", req.query.name)
    res.send('Hello, this is home page');
});

app.listen(4400);