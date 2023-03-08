import http from "http";

        const server = http.createServer((request, response)=>{

        // console.log(request)

        //basic response

        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Hello tutors, i'm working on my homework</h1>");
        response.end();

        const url = request.url;
        const method = request.method;

        if (url==='/'){
            response.setHeader("Content-Type", "text/html");
            response.write("<h1>Hello tutors, i'm working on my homework</h1>");
            response.end();

        }

        if (url === '/student'){

            response.setHeader("Content-Type", "text/html");
            response.write("<h1>Student name: Tode, Student lastname: Temov, Academy: SEDC, Subject: NodeJS</h1>");
            response.end();
        }
})



server.listen(3000, () => {

    console.log('Server is up and running')
})