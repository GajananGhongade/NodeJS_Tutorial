// how to make a server in Nodejs

const http = require("http");
// console.log(http);
http.createServer((req, res) => {
   res.write("hello world");
   res.end();
}).listen(4500)

console.log('server started on port 4500');



// function dataControl(req, res){
//    res.write("<h1>Hello world</h1>");
//    res.end();
// }

// http.createServer(dataControl).listen(4500)

// console.log('server started on port 4500  h1 tag');

