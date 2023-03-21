import express from "express";
import blogRouter from "./routes/blog.routes.js";


const app = express();

app.use(express.json());

app.use("/", blogRouter);



app.listen(3000, () => {
    console.log("Server is up and running on port: 3000...")
});