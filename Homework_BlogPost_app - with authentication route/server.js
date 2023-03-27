import express from "express";
import authRouter from "./routes/auth.routes.js";
import blogRouter from "./routes/blog.routes.js";
import { authSession } from "./sessions/auth.session.js";


const app = express();

app.use(express.json());


app.use("/", authSession, blogRouter);
app.use(authRouter);



app.listen(3000, () => {
    console.log("Server is up and running on port: 3000...")
});