import express from "express";
import  BlogController from "../controllers/blog.controller.js";

const blogController  = new BlogController();

const blogRouter = express.Router();

blogRouter.get("/",async (req,res) => {

const blogs = await blogController.listBlogs();

res.send(blogs);


})

blogRouter.post("/",async (req,res) => {

    const body = req.body;

    if(!body.title || !body.body || !body.author||!body.date||!body.tags){
        res.status(400).send({message: "Request body invalid"});
        return;
    }

    await blogController.createBlog(body.title, body.body, body.author, body.date, body.tags);

    res.status(201).send({message: "Car was created."})

})