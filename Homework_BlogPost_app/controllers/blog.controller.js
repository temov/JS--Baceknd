import BlogModel from "../models/blog.model.js";

const blogModel = new BlogModel();

class BlogController {

    async listBlogs(){

        const  listedBlogs = await blogModel.getAllBlogs();

         return listedBlogs;
    }

    async createBlog(id,title, body, author, date, tags){
        await blogModel.createBlogPost(id,title, body, author, date, tags)

    }
    async deleteBlog(id){
        await blogModel.deleteBlogPost(id)

    }
    async editBlog(id,reqBody){
        await blogModel.editBlogPost(id,reqBody)

    }
    async filterBlog(tag){
        await blogModel.filterBlogsByTags(tag) 


    }
}

export default BlogController;