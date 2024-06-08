const dbConnect = require("./file23_Readdata");

module.exports = updateData;

async function updateData(){
    let data = await dbConnect();
    let result = await data.updateMany(
        {name: 'Pooja'}, {$set:{name: 'Poojju'}}
    )
    console.log(result)
}

updateData()