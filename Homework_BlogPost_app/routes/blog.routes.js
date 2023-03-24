import express from "express";
import  BlogController from "../controllers/blog.controller.js";

const blogController  = new BlogController();

const blogRouter = express.Router();

//GET ALL => localhost:3000

blogRouter.get("/",async (req,res) => {

const blogs = await blogController.listBlogs();

res.send(blogs);


})

//Create new blogpost - post  => localhost:3000

blogRouter.post("/",async (req,res) => {

    const body = req.body;

    if(!body.title || !body.body || !body.author ||!body.date ||!body.tags){
        res.status(400).send({message: "Request body invalid"});
        return;
    }

    await blogController.createBlog(body.title, body.body, body.author, body.date, body.tags);

    res.status(201).send({message: "Blog post was created."})

})

// Delete blogpost by given id 

blogRouter.delete("/blog/:id",async (req,res)=>{

    const id = req.params.id;
    await blogController.deleteBlog(id);

    res.status(201).send({ message: "Blogpost was deleted" });
})

//Edit blogpost by given id

blogRouter.patch("/blog/:id",async (req,res)=>{

    const id = req.params.id;
    const reqBody = req.body;
    await blogController.editBlog(id,reqBody);

    res.status(201).send({ message: "Blogpost was edited" });
})

//Filter blogposts that matches tags property

blogRouter.get("/blog",async (req,res)=>{

    const tag = req.query.tag;
    const foundBlog = await blogController.filterBlog(tag);


    res.send(foundBlog);
})



export default blogRouter;

