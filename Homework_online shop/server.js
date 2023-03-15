import express from "express";
import router from "./online-shop.js";
import fs from "fs"

const app = express();

//Middleware
// Simple middleware
app.use((req, res, next) => {

    console.log("We are at middleware, We intercept each request made to the server =)");
    //without next() the request is stuck;

    // after the middleware finish it's job
    // we invoke the method next() that will let the app reach the next/following logic
    next(); 
})

//Exercise #2: Create middleware to show time of the request
const timeOfRequest = (req, res, next) => {
    let time = new Date().toLocaleString();

    const message = `Request on the route /products was made at: ${time} `;

    console.log(message)

     //BONUS requrements

     fs.appendFileSync('logs.txt',message)

    next();
}

app.use(timeOfRequest);

app.use(express.json());

app.use(router); // In this middleware we use the Router that has all the predefined routes =)

app.get("*", (req, res) => {
    res.status(404).send("Route does not exist.")
});

app.post("*", (req, res) => {
    res.status(404).send("Route does not exist.")
});

app.listen(3000, () => {
    console.log("Server is up and running...");
});