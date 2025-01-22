const knex = require('../common/knex.config')()

function webroutes(app) {
    app.get('/',async (req, res) => {
        let data = [];
        try {
            data = await knex("news")
                .select("id", "title", "slug", "shorDesc", "banner", "createdAt")
                .orderBy("id", "desc")
                .limit(50)
        } catch (error) {
            console.error("Error fetching news:", error);
        }
        return res.render("website/index", { data });
    })

    app.get('/:slug',async (req, res) => {
        const details=await knex("news").where("slug",req.params.slug).first()
        if(details){

            const count=parseInt(details.view) +1;
            await knex("news").update({
                view:count
            }).where("id",details.id)
        }
        const data = await knex("news")
        .select("id", "title", "slug", "shorDesc", "banner", "createdAt")
        .orderBy("id", "desc")
        .limit(50)
        return res.render("website/newdetail",{details:details,data:data});
    })
}

module.exports = webroutes