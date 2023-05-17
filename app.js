const http=require('http');

http.createServer((req,res)=>{

const url=req.url;
if(url==='/home')
{
res.write('Welcome Home')
res.end();
}

if(url==='/about')
{
    res.write('Welcome to about us page')
    res.end();
}


if(url==='/node')
{
res.write('Welcome to my node js project')
res.end();
}
res.write('<html><head><title>My first Node Js Code</title></head><body><h1>Welcome to Node JS</h1></body></html>')
}).listen(8000);
