// mongodb connection file
const dbConnect = require('./file22Mongodb')  

const mongodb = require('mongodb')

const express = require('express');

const app = express();

app.use(express.json());



// DELETE API 

app.delete('/:id',async (req, res)=>{
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
   res.send(result) 
    res.send("done")
    console.log(req.params.id)

})




app.listen(5300, () =>{
    console.log("server is running on port 5300")
});