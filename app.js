const express = require('express')
const app = express()
const port = 5001

const { Article } = require('./models')

app.use(express.json())

// GET all article
app.get('/articles', (req, res) => {
    Article.findAll()
        .then(articles => {
            res.status(200).json(articles)
        })
})

//GET articlew by ID
app.get('/articles/:id', (req, res) => {
    Article.findOne({
            where: { id: req.params.id }
        })
        .then(article => {
            res.status(200).json(article)
        })
})

//CREATE

//UPDATE

//DELETE

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})