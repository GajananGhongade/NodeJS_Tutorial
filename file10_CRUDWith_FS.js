// create
// read
// update
// delete
// with filesystem 



const fs = require('fs')
const path = require('path');

const dirPath = path.join(__dirname, 'files');
const filePath = `${dirPath}/apple.tmt`;
// create
// fs.writeFileSync(filePath, 'This is a file we have to read');


// read
// fs.readFile(filePath, 'utf-8', (err, item) => {
//     if(err){
//         console.log('error is present', err);
//     }
//     console.log(item);
// })


// update

// fs.appendFile(filePath, "I have append this text in the appl.tmt file", (err) => {
//     if(!err){
//                 console.log('file is updated')
//     }
// })


// rename 

// fs.rename(filePath, `${dirPath}/fruit1.txt`, (err) => {
//     if(!err){
//         console.log('file name  is updated')
// }
// });

// delete operation

fs.unlinkSync(`${dirPath}/hello0.txt.`, (err)=>{
    if(!err){
        console.warn("file is deleted")
    }
});