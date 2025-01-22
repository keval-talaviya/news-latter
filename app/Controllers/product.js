const knex = require('../../common/knex.config')()
const moment = require('moment')


function newsCotroller() {
    return {

        newsList: async (req, res) => {
            const data = await knex("news")
                .orderBy("id", "desc")
            return res.render("product", { data: data })
        },
        newsCreateIndex:async (req,res)=>{
            return res.render("create-news")

        },
        newsCreate: async (req, res) => {

            await knex("news").insert({
                category: req.body.category,
                title: req.body.title,
                slug: req.body.slug,
                shorDesc: req.body.shorDesc,
                descOne: req.body.descOne,
                descTwo: req.body.descTwo,
                descThree: req.body.descThree,
                descFour: req.body.descFour,
                metaTitle: req.body.metaTitle,
                metaDesc: req.body.metaDesc,
                banner: `/upload/${req.files.banner[0].filename}`,
                image1: `/upload/${req.files.image1[0].filename}`,
                image2: `/upload/${req.files.image2[0].filename}`
            })
            return res.redirect("/admin/news")
        },

        getEditData: async (req, res) => {
            const data = await knex("news").where("id",parseInt(req.params.id)).first()
            return res.render("edit-news", { data: data })
        },


        editNews: async (req, res) => {

            const isNews = await knex("news").where("id", parseInt(req.body.id)).first();
            if (isNews) {
                await knex("news").update({
                    category: req.body.category,
                    title: req.body.title,
                    slug: req.body.slug,
                    shorDesc: req.body.shorDesc,
                    descOne: req.body.descOne,
                    descTwo: req.body.descTwo,
                    descThree: req.body.descThree,
                    descFour: req.body.descFour,
                    metaTitle: req.body.metaTitle,
                    metaDesc: req.body.metaDesc,
                }).where("id", isNews.id)

                if (req.files.banner) {
                    if (req.files.banner[0]) {
                        await knex("news").update({
                            banner: `/upload/${req.files.banner[0].filename}`,
                        }).where("id", isNews.id)
                    }
                }
                if (req.files.image1) {

                    if (req.files.image1[0]) {
                        await knex("news").update({
                            image1: `/upload/${req.files.image1[0].filename}`,
                        }).where("id", isNews.id)
                    }
                }
                if (req.files.image2) {

                    if (req.files.image2[0]) {
                        await knex("news").update({
                            image2: `/upload/${req.files.image2[0].filename}`,
                        }).where("id", isNews.id)
                    }
                }
                return res.redirect("/admin/news")

            }
        },
        deleteNews: async (req, res) => {
            const data = await knex("news").where("id", parseInt(req.params.id)).first()
            if (data) {
                await knex("news").where("id", parseInt(req.params.id)).del()
            }

            return res.redirect("/admin/news")


        }
    }
}

module.exports = newsCotroller