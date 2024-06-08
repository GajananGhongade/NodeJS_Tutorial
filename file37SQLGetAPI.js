const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Gajanan@1818',
    database:'mycollege'
})

connection.connect((err)=>{
    if(err){
        console.log("error while connecting with mysql", err.stack)
    }else{
        console.log("mysql connected successfully", connection.threadId)
    }
})

module.exports = connection;