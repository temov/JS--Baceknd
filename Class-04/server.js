import http from 'http';

const server  = http.createServer((request,response)=>{

    // basic response

    console.log(request)

    //basic rersponse 

    response.setHeader('Content-Type', 'text/html')
    response.write('<h1>Hello felas , we return html from our server</h1>')
    response.end

    const url = request.url
    const method = request.method

})

console.log('Server:', server)

server.listen(3000,()=>{

    console.log('Server is up and running')
})