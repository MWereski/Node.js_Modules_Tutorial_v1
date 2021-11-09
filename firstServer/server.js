const http = require('http');

const port = process.env.PORT || 3000

http.createServer((req, res) => {
    

    // console.log(req.url);
    // console.log(req.method);

     if(req.url === "/"){
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8" })
        res.end("<h1><center>Strona Główna</center></h1>")
     }
     else if(req.url === "/users"){
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8" })
        res.end("<h1><center>Strona użytkowników</center></h1>")
     }else{
        res.writeHead(404, {"Content-type": "text/html; charset=utf-8" })
        res.end(`<h4><center>${req.url}</center></h4>`);
     }
     

}).listen(port, '127.0.0.1', () => {
    console.log(`SERVER PORT LISTING: ${port}`)
});