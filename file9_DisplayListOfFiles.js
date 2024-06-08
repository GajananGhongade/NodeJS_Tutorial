const { dir } = require('console');
const fs = require('fs');

const path = require('path');

// creating multiple files 


const dirPath = path.join(__dirname, 'files');
// console.log(dirPath)

// for(let i=0; i<5; i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`, "a simple txt file")
// }




// reading files or getting info of files 

// function displayListFromFolder(folderPath) {
//   fs.readdir(folderPath, (err, files) => {
//     if (err) {
//       console.error('Error reading folder:', err);
//       return;
//     }

//     console.log('Files and folders in', folderPath + ':');
//     files.forEach((file) => {
//       console.log(file);
//     });
//   });
// }

// // Provide the path to the folder you want to display the list for
// const folderPath = dirPath;
// displayListFromFolder(folderPath);


fs.readdir(dirPath, (err, files) => {
    if(err){
        console.log('files have error', err)
    }
    files.forEach((file)=>{console.log(`file name is :  ${file}`)})
})