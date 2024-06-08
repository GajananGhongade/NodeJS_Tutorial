const express = require('express');
const app = express()
// console.log(app)

app.get('', (req, res)=>{
    res.send('Hello, this is home page');
})

app.get('/about', (req, res)=>{
    res.send('Hello, this is a home page')
});

const a = app.listen(7300); 
