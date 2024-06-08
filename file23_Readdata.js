module.exports = dbConnect

const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'gfg'
const client = new MongoClient(url)

async function dbConnect(){

    let result = await client.connect();
    let db =  result.db(database)
    return collection = db.collection('stud')
    // let response = await collection.find({}).toArray();
    // console.log(response)

}

// handling the connection using promise 
dbConnect().then((res)=>{
    res.find().toArray().then((data)=>{
        console.log(data);
    })
})