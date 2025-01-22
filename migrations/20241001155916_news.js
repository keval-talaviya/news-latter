/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("news",(table)=>{
        table.increments("id").unsigned().primary();
        table.string("category").nullable()
        table.string('title').nullable();
        table.string('slug').nullable();
        table.string('shorDesc').nullable();
        table.string('banner').nullable();
        table.string('image1').nullable();
        table.string('image2').nullable();
        table.text('descOne');
        table.text('descTwo');
        table.text('descThree');
        table.text('descFour');
        table.string('metaTitle').nullable();
        table.string('metaDesc').nullable();
        table.string("view").defaultTo(0)
        table.string("createdAt").defaultTo(knex.fn.now());
        table.string("updatedAt").nullable();
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("news");
};
