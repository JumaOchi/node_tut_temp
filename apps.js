    // Here we demonstrate an essential feature of stream
    // Instead of sending in all the data which could be relatively large
    // The data should be sent in chunks

var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        const fileStream = fs.createReadStream('./content/big.txt','utf8');
        fileStream.on('open',()=>{
fileStream.pipe(res)
        })
        fileStream.on('error', (err)=>{
            res.end(err)
        })
    })
    .listen(5000)
