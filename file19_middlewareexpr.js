const express = require('express')
const app = express();


const middleWare = (req, res, next) =>{
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

app.get('/user', (req, res) => {
    res.send('welcome to user page')
})



app.listen(4300);