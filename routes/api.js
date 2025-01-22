const multer = require('../app/Helpers/multer')

function apiroutes(app) {

    app.get('/api', (req, res) => {
        res.send('test api');
    })

}

module.exports = apiroutes