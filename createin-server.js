const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    
    // res.write('Welcome to our home page')
    // res.end()

    if(req.url === '/'){
        res.end('Welcome to our home page.')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`<h1>Opps!</h1>
        <p>We can't seem to find the page you are lookin for</p>
        <a href="/">back home </a>`)

})

server.listen(5000)