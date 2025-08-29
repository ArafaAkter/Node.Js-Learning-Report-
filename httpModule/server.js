
// create a server using http module.

const http = require("http")
const port = 3000;
const hostname = '127.0.0.1';


const myServer = http.createServer((req,res)=>{
    res.end("hello");
});
myServer.listen(port, ()=>{
    console.log(`server is running at http://${hostname}:${port}`);
});