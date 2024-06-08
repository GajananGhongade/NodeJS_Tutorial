const express = require('express');
const dbConnect = require('./file23_Readdata');
// const dbConnect = require('./file22Mongodb')
const app = express();

app.use(express.json());


app.put('/name', async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:"pooja"},
        {$set:{age:18}}
    )
    // console.log(result)
    // console.log(req.body)
 res.send(result)
  
})


// DELETE API 

app.delete('/id', (req, res)=>{
    console.log(req.params.id)
    res.send("done")
})




app.listen(4300)