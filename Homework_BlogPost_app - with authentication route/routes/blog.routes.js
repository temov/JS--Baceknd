import express from "express";
import  BlogController from "../controllers/blog.controller.js";
import { blogSession } from "../sessions/blogs.session.js";
import { authSession } from "../sessions/auth.session.js";

const blogController  = new BlogController();

const blogRouter = express.Router();


// blogRouter('/blogs',authSession,blogSession,(req,res)=>{

//     res.send(blogs);
//     res.sendStatus(200);
// })

//GET ALL => localhost:3000

blogRouter.get("/",async (req,res) => {

const blogs = await blogController.listBlogs();

res.send(blogs);


})

//Create new blogpost - post  => localhost:3000

blogRouter.post("/",authSession,blogSession,async (req,res) => {

    const body = req.body;
    const session = req.session;

    if(session.user !== undefined && session.user.isLoggedIn){
        await blogController.createBlog(body.title, body.body, body.author, body.date, body.tags);
        res.status(201).send({message: "Blog post was created."})

    }else{

        res.status(401).send({message: "Please loggin first"});
    }

    // if(!body.title || !body.body || !body.author ||!body.date ||!body.tags){
    //     res.status(400).send({message: "Request body invalid"});
    //     return;
    // }

    // await blogController.createBlog(body.title, body.body, body.author, body.date, body.tags);

    // res.status(201).send({message: "Blog post was created."})

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

