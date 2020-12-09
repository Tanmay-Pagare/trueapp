var http=require('http');
var fs=require('fs');
var url=require('url');


var onCreateServer=function(request,response)
{
 var pathname=url.parse(request.url).pathname;
fs.readFile(pathname.substr(1), function(err,data)
{
response.writeHead(200,{'Content-Type': 'text/html'});
response.write(data.toString());
response.end();
});

};

var server=http.createServer(onCreateServer);
server.listen(8081);
console.log("server running at 8081 port number");