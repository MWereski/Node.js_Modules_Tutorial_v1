const http = require('http')
const fs = require('fs')
const path = require('path')
const port = process.env.port || 3000

const users = [
    {name: "Adam", id: 1},
    {name: "Ewa", id: 2}
]

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    switch(req.url){
        case '/':
            fs.readFile(path.join(__dirname, 'index.html'), (err, page) => {
                if(err) res.end("<h1>Nie udało się pobrać pliku!</h1>")
                else res.end(page)
            })
            //res.end("<h1><center>Strona Główna</center></h1>");
            break;
        case '/users':
            fs.readFile(path.join(__dirname, 'users.html'), (err, page) => {
                if(err) res.end("<h1>Nie udało się pobrać pliku!</h1>")
                else res.end(page)
            })
            break;
        case '/api/users':
            res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
            const usersJSON = JSON.stringify(users);
            res.end(usersJSON);
            break;
        case '/code.js':
            res.writeHead(200, {"Content-Type": "application/javascript; charset=utf-8"})
            fs.readFile(path.join(__dirname, 'script.js'), (err, page) => {
                if(err) res.end("<h1>Nie udało się pobrać pliku!</h1>")
                else res.end(page)
            })
            
            break;
        default:
            res.end("<h2><center>Strona nie istnieje!</center></h2>")
    }

    
   

}).listen(port, "127.0.0.1")