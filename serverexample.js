const http = require("http");

var server = http.createServer(function(req, res){
console.log(req);

if(req.url === '/'){
    res.end('welcome to home page')
}

if(req.url === '/about'){
res.end('welcometo about section')
}

// res.end('error');

});



server.listen(3000, function(){
    console.log("server listing on port no 3000");
})
