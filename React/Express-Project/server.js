// const http = require('http');

// const server=http.createServer((req, res) => {
//     if (req.method=='GET' && req.url==='/'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({message: 'Hello, World!'}));
//     }
//     else if (req.method=='GET' && req.url==='/about'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({message: 'About'}));
//     }
//     else{
//         res.writeHead(404, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({error: 'Not Found'}));
//     }
// });
// server.listen(3000,()=>{
//     console.log('Server is running http://localhost:3000');
// })
const express = require('express');
const fs = require('fs');
const app = express();
const productsRouter = require('./routes/product');
const blogsRouter = require('./routes/Blogs');
const cartRouter = require('./routes/cart');
const studentsRouter = require('./routes/students');
const cors = require('cors');
const connectDB = require('./config/db');
connectDB();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.json({ message: 'Hello, Json!' });
})
app.get("/about", (req, res) => {
    res.json({ message: 'About Json!' });
});


app.get("/blogs", (req, res) => {
    const products = fs.readFileSync("data/blogs.json");
    res.json(JSON.parse(products));
});
app.get("/blogs/:id", (req, res) => {
    const blogs = JSON.parse(fs.readFileSync("data/blogs.json")).blogs;
    const blog = blogs.find(p => p.id === parseInt(req.params.id));
    if (blog) {
        res.json(blog);
    }
    else {
        res.status(404).json({ error: 'Blog Not Found' });
    }
});

app.delete("/blogs/:id", (req, res) => {
    const blogs = fs.readFileSync("data/blogs.json");
    const updatedBlogs = JSON.parse(blogs).filter((p) => {
        return p.id !== parseInt(req.params.id);
    })
    fs.writeFileSync("data/blogs.json", JSON.stringify(updatedBlogs, null, 2));
    res.status(200).json({ message: 'Blog Deleted Successfully' });
});

app.use('/products', productsRouter);
app.use('/blogs', blogsRouter);
app.use('/cart', cartRouter);
app.use('/students', studentsRouter);

app.listen(3000, () => {
    console.log('Server is running http://localhost:3000');
})