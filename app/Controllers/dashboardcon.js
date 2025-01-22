const knex = require('../../common/knex.config')
const moment = require('moment')


function dashboardcontroller() {
    return {
        async index(req, res) {
            res.render('dashboard')
        },

      
    }
}

module.exports = dashboardcontroller;





