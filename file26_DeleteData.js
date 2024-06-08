const dbConnect = require("./file23_Readdata");

module.exports = DeleteData;

async function DeleteData(){
   let data = await dbConnect();
   let result = await data.deleteMany({name: 'Poojju'})
   console.log(result)
}

DeleteData();