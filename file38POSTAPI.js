const connection = require('./file37SQLGetAPI');
const express = require('express');
const app = express();

app.use(express.json());   // syntax for parsing data through postman body


app.post('/', (req, res) => {
    // const data = {RollNo:14,Name:"Bajrang", Age:23}  // static data sending 
    const data = req.body;         // sending data through postman body
    connection.query("INSERT INTO mytable SET ?", data, (error, result, fields)=>{
        if(error){
         console.log ('error', error.stack)
        }else{
            res.send(result)
        }
    })
    
    
})



// get method

app.put('/', (req, res) => {
    // let data = ["Maharudra", 100];
    let data = [req.body.Name, req.body.Age, req.body.RollNo];

    connection.query("UPDATE mytable SET Name = ?, Age = ?, WHERE RollNo = ?", data,  (error, result, fields) => {
        if(error){
            console.log("error while updating data", error.stack)
        }else{
            res.send(result)
            console.log("updated successfully", connection.threadId)
        }
    })

    
})









app.listen(4000);