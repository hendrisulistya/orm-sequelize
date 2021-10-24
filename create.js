const { Article } = require('./models')

Article.create({
    title: 'Hello World',
    body: 'Lorem Ipsum Dolor',
    approved: true
}).then(article => {
    console.log(article, 'berhasil buat article baru')
})