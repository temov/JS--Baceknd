import BlogModel from "../models/blog.model.js";

const blogModel = new BlogModel();

class BlogController {

    async listBlogs(){

         listedBlogs = await blogModel.getAllBlogs();

         return listedBlogs;
    }

    async createBlog(title, body, author, date, tags){
        await blogModel.createBlogPost(title, body, author, date, tags)

    }
}

export default BlogController;