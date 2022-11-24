const express = require('express')
const app = express()

// register view engine
app.set('view engine','ejs')

// stati middleware
app.use(express.static('public'))

const blogs = [
    {
        "_id": 1,
        "title": "PHP Developer",
        "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, modi voluptate. Ipsa placeat ducimus cumque?",
    },
    {
        "_id": 2,
        "title": "PHP Laravel Developer",
        "snippet": "lorem-ipsum-dolor",
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, modi voluptate. Ipsa placeat ducimus cumque?",
    },
    {
        "_id": 3,
        "title": "WordPress Developer",
        "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid inventore obcaecati?",
        "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque, ea at quo, architecto enim obcaecati maxime officiis voluptate dolorum, rerum quia cupiditate doloribus. Obcaecati nihil voluptatum cupiditate repudiandae illo!",
    },
    {
        "_id": 4,
        "title": "Shopify Developer",
        "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquid.",
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laboriosam fugiat. Aliquid, ducimus tempore quis quo beatae illo? Mollitia non explicabo libero earum, suscipit dignissimos at ullam ducimus velit. Dolor adipisci modi, distinctio quae veniam harum repellendus recusandae nesciunt est, doloribus placeat sed explicabo perferendis a quam, voluptate ad at necessitatibus neque rem odit ex accusantium. Distinctio necessitatibus unde obcaecati beatae nulla suscipit excepturi provident, sequi id deleniti alias. Dolores veniam tempora in nihil, sequi earum mollitia est ut sed!",
    },
    {
        "_id": 5,
        "title": "NodeJS Developer",
        "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquid.",
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laboriosam fugiat. Aliquid, ducimus tempore quis quo beatae illo? Mollitia non explicabo libero earum, suscipit dignissimos at ullam ducimus velit. Dolor adipisci modi, distinctio quae veniam harum repellendus recusandae nesciunt est, doloribus placeat sed explicabo perferendis a quam, voluptate ad at necessitatibus neque rem odit ex accusantium. Distinctio necessitatibus unde obcaecati beatae nulla suscipit excepturi provident, sequi id deleniti alias. Dolores veniam tempora in nihil, sequi earum mollitia est ut sed!",
    },
    {
        "_id": 5,
        "title": "DevOps Engineer",
        "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquid.",
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laboriosam fugiat. Aliquid, ducimus tempore quis quo beatae illo? Mollitia non explicabo libero earum, suscipit dignissimos at ullam ducimus velit. Dolor adipisci modi, distinctio quae veniam harum repellendus recusandae nesciunt est, doloribus placeat sed explicabo perferendis a quam, voluptate ad at necessitatibus neque rem odit ex accusantium. Distinctio necessitatibus unde obcaecati beatae nulla suscipit excepturi provident, sequi id deleniti alias. Dolores veniam tempora in nihil, sequi earum mollitia est ut sed!",
    },
];

// logger middleware
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next()
})

// home page
app.get('/', function (req, res) {
    res.render('index', {title: "Home Page"})
})

// blogs
app.get('/blogs', function (req, res) {
    res.render('blogs/index', {title: "blogs", blogs})
})

app.get('/blogs/:id/show', function (req, res) {
    res.render('blogs/show', {
        title: blogs[req.params.id -1].title,
        blog: blogs[req.params.id -1]
    })
})

app.get('/blogs/:id/edit', function (req, res) {
    res.render('blogs/edit', {
        title: blogs[req.params.id -1].title,
        blog: blogs[req.params.id -1]
    })
})

app.get('/blogs/create', function (req, res) {
    res.render('blogs/create', {title: "create blog"})
})


// pages
app.get('/about', function (req, res) {
    res.render('pages/about', {title: "about page"})
})
app.get('/contact', function (req, res) {
    res.render('pages/contact', {title: "contact page"})
})


// redirect
app.get('/relentless', function (req, res) {
    res.redirect('/');
})


// catch
app.use((req, res) => {
    res.status(404).render('errors/404', {title: "404"});
    res.status(403).render('errors/403', {title: "403"});
    res.status(500).render('errors/500', {title: "500"});
})

app.listen(3000, () => {
    console.log('listening for requests on port 3000')
})
