const http = require('http');
const fs = require('fs')

http.createServer(function(req,res) {
console.log(req.url)
console.log(req.method);
console.log(req.headers["user-agent"])
    if(req.url === '/') {
        res.end('Main')
    } else if (req.url === '/cat') {
        res.end('category page')
    } else if (req.url === '/dat') {
        let myFile = fs.readFileSync('page.dat')
        console.log(myFile);
        res.end(myFile)
    }

    res.end('Hello World')

}).listen(3000);