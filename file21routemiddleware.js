const express = require('express')
const app = express();



module.exports = middleWare = (req, res, next) =>{
    if(!req.query.age){
        res.send("please provide age")
    }
    else{
    next();
    }
}
app.use(middleWare)


app.get('/', (req, res)=>{
    res.send('welcome to home page')
})

app.get('/user', middleWare, (req, res) => {
    res.send('welcome to user page')
})

app.get('/about', middleWare,(req, res) => {
    res.send('welcome to about page')
})

app.get('/contact', (req, res) => {
    res.send('welcome to contact page')
})


app.listen(4300);