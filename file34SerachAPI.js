
// Search API which can find multiple record from database

const express = require('express');
require('./file32Connectmongoose')
const ImpoSchema = require('./file32validateSchema')



const app = express();

app.use(express.json());


app.get('/search/:key', async (req, res) => {
    console.log(req.params.key)
    let data = await ImpoSchema.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}},

            ]
        }
    )

    res.send(data)
})


app.listen(5000)