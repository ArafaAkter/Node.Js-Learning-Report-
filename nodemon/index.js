const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res) =>{
    const handleReadfile = (statusCode,fileLocation) =>{
        fs.readFile(fileLocation,(err,data) => {
        res.writeHead(statusCode,{ "Content-Type": "Text/html"});
        res.write(data);
        res.end();
    }); 

}

   if(req.url === '/'){
        handleReadfile(200,"index.html");
   }
   else if(req.url === '/about'){
        handleReadfile(200,"about.html");
  
   }
   else if(req.url === '/contact'){
    handleReadfile(200,"contact.html");
   }
   else{
       handleReadfile(200,"error.html");
    }
});

server.listen(PORT,hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${PORT}`);
});


