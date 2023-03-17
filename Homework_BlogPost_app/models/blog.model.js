import fileService from "../shared-services/file-service.js";
import {Blog} from "../entities/blog.entity.js";

class BlogModel {

    async getAllBlogs(){
        const rawBlogs = await fileService.readFile("./db/blogs.json");
        const blogs = JSON.parse(rawBlogs);

        return blogs;
    }
    async createBlogPost(title, body, author, date, tags){   
        const rawBlogs = await fileService.readFile("./db/blogs.json");
        const blogs = JSON.parse(rawBlogs);

        const blog = new Blog(title, body, author, date, tags);

        blogs.push(blog);

        await fileService.writeFile("./db/blogs.json", JSON.stringify(blogs, null, 2));
    }

}

export default BlogModel;