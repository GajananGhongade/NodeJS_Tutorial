// const a = require('./file23_Readdata')
// const dbConnects = require('./file22Mongodb')
// const update = require('./file25_UpdateData')
// // const deleteData = require('./file26_DeleteData')

// const basicAPI = require('./file28_PostAPI')
// const putmethod = require('./file29_PUTAPI')
// const deleteapi = require('./file30_DeleteAPI')




// connect mongodb to nodejs 

// const {MongoClient} = require('mongodb');
// // const url = 'mongodb://localhost:27017/';
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'gfg'
// const client = new MongoClient(url)

// async function getData(){

//     try{
//     let result = await client.connect();
//     let db =  result.db(database)
//     let collection = db.collection('stud')
//     let response = await collection.find({}).toArray();
//     console.log(response)
// } catch(error){
//     console.error('error while connecting to mongodb', error)
// }finally{
//     await client.close();
// }

// }
// getData();






const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'gfg'
const client = new MongoClient(url)

async function dbConnect(){

    try{

    let result = await client.connect();
    let db =  result.db(database)
    let collection = db.collection('stud');
    return collection; 
    // let response = await collection.find({}).toArray();
    // console.log(response)
} catch (error){
    console.error("error connecting to mongodb", error)
    throw error;
}
}
// handling the connection using promise 
// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })



// handling using async await 

// const main = async () => {
//    let data = await dbConnect();
//    data = await data.find().toArray()
//    console.log(data)
// }

// main()




module.exports = dbConnect;

