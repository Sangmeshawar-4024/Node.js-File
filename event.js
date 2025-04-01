const http = require('http');
const fs = require('fs');

console.log('Server Starting in browser');

const server = http.createServer((req, res) => {
    fs.writeFile('file1.txt', 'Hello Node.js server!', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Internal Server Error');
        }
        console.log('The file has been saved!');

        fs.readFile('file1.txt', 'utf8', (err, data) => {
            if (err) console.error(err);
            console.log(data);
        });

        fs.unlink('file1.txt',(err)=>{
            if(err) console.error(err);
            console.log('File deleted successfully');
        });
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('C.A Sangu - Full Stack Developer!');
    });
});

console.log('Server ending');

server.listen(3000, () => 
    console.log('Server is running on port 3000')
);
