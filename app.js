const http = require('http');
const utf8 = require('utf8');
http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/plain"});
        switch(req.url){
            case "/":
                res.end(utf8.encode("Você está na página home!"))
                break;
            case "/contato":
                res.end(utf8.encode("Você está na pagina contato!"));
                break;
            default:  res.end(utf8.encode("Você está no nosso Servidor!"));
            break;
        }
}).listen(3030);