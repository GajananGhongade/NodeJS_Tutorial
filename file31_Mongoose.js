
const mongoose = require('mongoose');

const main = async () => {
    // await mongoose.connect('mongodb://127.0.0.1:27017/gfg')
    await mongoose.connect('mongodb://127.0.0.1:27017/gfg');

    // validating schema
    const StudScema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        categories:String
    })
    const StudModel = mongoose.model('stud', StudScema);
    let data = new StudModel({name:'PS', price:234, brand:'xyz', categories:'ABC'})
    // let result = await data.save()
    // console.log(result)
}

main();




const StudScema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    categories:String
})


// upadating data using mongoose 

const updateData = async ()=>{
    const StudModel = mongoose.model('studs', StudScema);
    let data = await StudModel.updateOne(
        {brand:"xyz"},
        {$set:{price:1000}}
    )
    console.log(data)
}

// updateData()


// delete operation using mongoose

const deleteData = async () => {
    const delData = mongoose.model('studs', StudScema)
    let data = await delData.deleteOne({price:1000})
    console.log(data)
}
deleteData();


// find or read data using mongoose 

const readData = async () => {
    const rData = mongoose.model('studs', StudScema)
    let data = await rData.find({price:2400})
    console.log(data)
}
readData();
