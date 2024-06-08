const express = require("express")
const path = require('path')

const app = express()

const publicPath = path.join(__dirname);

app.get('',(__,  res)=>{
    res.sendFile(`${publicPath}/file16_makehtmlpage.html`)
})

app.listen(3300);