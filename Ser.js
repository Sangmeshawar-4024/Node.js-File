const http = require ('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    fs.writeFile('s1.txt','Hi C.A Sangu',function (err){
        if(err) throw err
        console.log('saved')
    
    res.writeHead(200,{'content-type':'text-plain'});
    res.end('Hello Full Stack Developer');
})})

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
})