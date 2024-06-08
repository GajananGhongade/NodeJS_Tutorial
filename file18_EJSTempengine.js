const express = require("express")
const path = require('path')

const app = express()

const publicPath = path.join(__dirname);

app.set('view engine', 'ejs');

app.get('', (__, res)=>{
    res.sendFile(`${publicPath}/file16_makehtmlpage.html`)
})

app.get('/profile', (__, res) => {
    res.render('profile');
})

app.listen(3800)