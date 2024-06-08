const dbConnect = require("./file23_Readdata");


const insert = async () => {
   const db = await dbConnect();
   const result = await db.insertMany([
    {name: 'note5', brand: 'Vivo'},
    {name: 'Pooja', marks: 94.80},]
   )
   if(result.acknowledged){
    console.log('data inserted')
   }
}
insert();









module.exports = insert;
