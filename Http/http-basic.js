const http = require('http')
const server = http.createServer((req,res) => {
    const url = req.url
    if (url==='/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Hi Harshu</h1>')
    res.end()
    }
    else if (url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Harshu is Beautiful</h1>')
        res.end()
    }
    else {
        res.writeHead(200,{'conent-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})
server.listen(5000); 