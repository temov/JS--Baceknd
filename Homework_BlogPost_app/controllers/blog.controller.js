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
    async deleteBlog(id){
        await blogModel.deleteBlogPost(id)

    }
    async editBlog(id,reqBody){
        await blogModel.editBlogPost(id,reqBody)

    }
}

export default BlogController;