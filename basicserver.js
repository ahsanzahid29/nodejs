const http=require('http');

http.createServer((req,resp)=>{
    resp.write('<h1>Hi This is ahsan</h1>');
    resp.end()


}).listen(4500);