const knex = require('../../common/knex.config')

function logincontroller() {
    return {
        async index(req, res) {
            if (req.session.userlogin) {
                if (req.session.userlogin.userlogintype === 'userlogin') {
                    res.redirect('/admin/dashboard');
                } else {
                    res.render('login')
                }
            } else {
                res.render('login')
            }
        },
        async loginpost(req, res) {
            const { email, password } = req.body;
            if (email == process.env.APPUSERNAME && password == process.env.APPUSERPASS) {
                req.session.userlogin = { userlogintype: "userlogin" }
                return res.redirect('/admin/dashboard')
            } else {
                return res.redirect('/login')
            }
        },
        async userlogout(req, res) {

            req.session.userlogin = { userlogintype: "logout" }
            return res.redirect('/login')
        }
    }
}

module.exports = logincontroller;