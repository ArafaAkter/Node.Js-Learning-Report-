// Fs module

const fs = require('fs');
console.log(fs);

// create file and write function

fs.writeFile('file1.txt',"I am Arafa",(err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("Successfull");
    }
});


// append text in existing file

fs.appendFile('file1.txt', "From university of scholars",(err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("successfull");
    }
});


// read file


fs.readFile('file1.txt','utf-8',(err,data) =>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


// Rename file 

fs.renameFile('file1.txt','file2.txt',(err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("sucessfull");
    }
});

