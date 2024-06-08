const mysql = require('mysql');
const mysql2 = require('mysql2');


const connection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Gajanan@1818',
    database:'mycollege'
})
connection.connect((err)=>{
    if(err){
        console.log("Error", err.stack)
    }else{
        console.log("connected successfully", connection.threadId)
    }
});

connection.query("select * from mytable", (err, result)=>{
    console.log("result", result)
})





// connection.end();