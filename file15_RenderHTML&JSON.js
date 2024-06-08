const express = require('express');
const app = express()
// console.log(app)


    // render html data
app.get('', (req, res)=>{
    
    res.send
    (`
    <h1>Welcome, To home page</h1><a href="/about">Go to about page</a>
`
)
});



app.get('', (req, res)=>{
  
    res.send(
        `<h1>Welcome, To home page</h1><a href="/about">Go to about page</a>`
    )
    });





app.get('/about', (req, res)=>{
  
    res.send(
        `<input type="text" placeholder="enter user"/>
        <button>Clickme</button>
        <a href="/about">Go to home page</a>
        `
    )
    });







    // json data rendering 

app.get("/help", (req, res)=>{
    res.send({
        name:'Gajanan',
        email:'gajanan@gmail.com'
    })
})





app.listen(4700);


