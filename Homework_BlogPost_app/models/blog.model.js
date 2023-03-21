import fileService from "../shared-services/file-service.js";
import { Blog } from "../entities/blog.entity.js";

class BlogModel {

    async getAllBlogs() {
        const rawBlogs = await fileService.readFile("./db/blogs.json");
        const blogs = JSON.parse(rawBlogs);

        return blogs;
    }
    //  Adding new blog post

    async createBlogPost(title, body, author, date, tags) {
        const rawBlogs = await fileService.readFile("./db/blogs.json");
        const blogs = JSON.parse(rawBlogs);

        const blog = new Blog(title, body, author, date, tags);

        blogs.push(blog);

        await fileService.writeFile("./db/blogs.json", JSON.stringify(blogs, null, 2));
    }

    //Deleting blog post by given id

    async deleteBlogPost(id) {
        const rawBlogs = await fileService.readFile("./db/blogs.json");
        const blogs = JSON.parse(rawBlogs);

        const filteredBlogs = blogs.filter((blog) => blog.id !== id);

        if (filteredBlogs.length === blogs.length) {
            res.status(404).send(`Blog with id: ${id} does not exist.`);

        } else {

            await fileService.writeFile("./db/blogs.json", JSON.stringify(filteredBlogs, null, 2));
            res.status(201).send(`Blog with id: ${id} was deleted.`);
        }
    }

    //Edit existing Blog post
    async editBlogPost(id, reqBody) {

        const rawBlogs = await fileService.readFile("./db/blogs.json");
        const blogs = JSON.parse(rawBlogs);

        const editedBlogs = blogs.map(blog => {


            if (blog.id == id) {

                blog.title = reqBody.title;
                blog.body = reqBody.body;
                blog.tags = reqBody.tags;

                return blog;
            }


        })

        await fileService.writeFile("./db/blogs.json", JSON.stringify(editedBlogs, null, 2));
        res.status(201).send(`Blog  was updated.`);




    }
    // Bonus requrements - Filter blogposts by tags-key
    async filterBlogsByTags(tags) {

        const rawBlogs = await fileService.readFile("./db/blogs.json");
        const blogs = JSON.parse(rawBlogs);

        const filteredBlogs = blogs.filter(blog => {

            tags.forEach(tag=>blog.tags.includes(tag))

            return blog;
        
        })

        await fileService.writeFile("./db/blogs.json", JSON.stringify(filteredBlogs, null, 2));
        res.status(201).send(`Blog with given tags query parameter was found.`);
    }
}





export default BlogModel;