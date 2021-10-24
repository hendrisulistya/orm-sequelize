const { Article } = require('./models')

Article.destroy({
    where: {
        approved: true
    }
}).then(() => console.log('berhasil delete'))