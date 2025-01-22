const dashboardcon = require('../app/Controllers/dashboardcon');
const logincon = require('../app/Controllers/logincon');
const loginmid = require('../app/Middleware/adminlogin');
const newsCotroller = require("../app/Controllers/product")
const multer = require('../app/Helpers/multer')


function webroutes(app) {
    app.get('/test', (req, res) => {
        res.send('Hello');
    })

    app.get('/login', logincon().index)
    app.post('/login', logincon().loginpost)
    app.get('/logout', loginmid, logincon().userlogout)

    app.get('/admin/dashboard', dashboardcon().index)

    app.get("/admin/news", newsCotroller().newsList)

    app.get("/admin/news/create",newsCotroller().newsCreateIndex)
    app.post("/admin/news", multer.fields([
        { name: 'banner', maxCount: 1 },
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 }
    ]), newsCotroller().newsCreate)
    app.get("/admin/news/edit/:id",newsCotroller().getEditData)
    app.post("/admin/news/edit", multer.fields([
        { name: 'banner', maxCount: 1 },
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 }
    ]), newsCotroller().editNews)
    
    app.get("/admin/news/delete/:id", newsCotroller().deleteNews)
}

module.exports = webroutes