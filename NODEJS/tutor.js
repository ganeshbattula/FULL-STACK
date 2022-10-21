var http = require('http');
dt = require('./date')
http.createServer(function(_req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('The Date and Time is ' + dt.myDateTime());
    res.end();
}).listen(8080);