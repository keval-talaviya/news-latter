const knex = require('../../common/knex.config')


async function adminlogin(req, res, next) {
    // const addressData=await knex('address').where('name',req.clientIp).first()
    // if(!addressData){
    //     return res.send({message:'Hack'})
    // }
    if (req.session.userlogin) {
        if (req.session.userlogin.userlogintype === 'userlogin') {
            next();
        } else {
            res.redirect('/login');
        }
    } else {
        res.redirect('/login');
    }
}

module.exports = adminlogin