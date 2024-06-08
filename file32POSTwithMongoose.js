const express = require('express');
require('./file32Connectmongoose')
const ImpoSchema = require('./file32validateSchema')


const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new ImpoSchema(req.body);
    let result = await data.save()
    console.log(req.body);
    res.send(result);
});
app.listen(5000);