let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
    let fullURL = req.url;
    let q = url.parse(fullURL, true);
    let pageToGoTo = "." + q.pathname + ".html";
    if (q.pathname == "/") {
        pageToGoTo = "./index.html"
    } 
    fs.readFile(pageToGoTo, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 not found at: " + pageToGoTo);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);