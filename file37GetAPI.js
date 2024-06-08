const connection = require('./file37SQLGetAPI');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    connection.query('select * from mytable', (err, result)=>{
        if(err){
            res.send('error')
        }else{
            res.send(result)
        }
    })
    // res.send('route done')
    
})

app.listen(4000);