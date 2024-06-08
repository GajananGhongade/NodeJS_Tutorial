

// In Postman and HTTP, status codes are three-digit numbers that are returned in the response header to indicate the status of the HTTP request. Here are some commonly used status codes and their meanings:

// 200 OK: The request was successful, and the server has returned the requested resource.
// 201 Created: The request was successful, and a new resource was created as a result. It is typically used for successful POST requests.
// 204 No Content: The request was successful, but there is no content to return in the response body. It is often used for successful DELETE requests.
// 400 Bad Request: The server could not understand the request due to client error, such as invalid syntax or missing parameters.
// 401 Unauthorized: The request requires user authentication. The client must provide valid credentials (e.g., via authorization header) before accessing the requested resource.
// 403 Forbidden: The server understood the request but refuses to authorize it. The client does not have sufficient permissions to access the requested resource.
// 404 Not Found: The server could not find the requested resource. It is commonly used to indicate that the endpoint or resource does not exist.
// 500 Internal Server Error: A generic server error occurred. It indicates that something unexpected went wrong on the server.
// These are just a few examples of the many status codes defined by the HTTP protocol. Each status code provides specific information about the result of the request. You can refer to the official HTTP status code documentation (e.g., HTTP/1.1 Status Code Definitions) for a comprehensive list of status codes and their meanings.





const data = require("./file7_datasample");
const http = require('http');

http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'application/json'});
   // res.write(JSON.stringify({name: 'Gajanan Ghongade', email: 'gajananghongade15@gmail.com'}));
   res.write(JSON.stringify(data));

   res.end();
}).listen(8000);

console.log("your server is running on port no 8000")