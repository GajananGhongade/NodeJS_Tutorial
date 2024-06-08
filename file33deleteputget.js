const express = require('express');
require('./file32Connectmongoose')
const ImpoSchema = require('./file32validateSchema')



const app = express();

app.use(express.json());


// post method
app.post('/create', async (req, res) => {
    let data = new ImpoSchema(req.body);
    let result = await data.save()
    console.log(req.body);
    res.send(result);
});


// GET Method 
app.get('/list', async (req, res) => {
    let data =  await ImpoSchema.find()
    // console.log(req.body);
    res.send(data);
});


// update method
app.put('/update/:_id', async (req, res) => {
    console.log(req.params)
    let data = await ImpoSchema.updateOne(
        req.params,
       {$set: req.body}
    )
    res.send(data)
})



// delete method 
app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params)
    let data = await ImpoSchema.deleteOne(req.params)
    res.send(data)
})





app.listen(5000);