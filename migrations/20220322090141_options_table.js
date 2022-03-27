/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("options_table", (table) => {
        table.increments();
        table.integer("question_id").unsigned();
        table.foreign("question_id").references("question_table.id");
        table.string("option");
        table.string("detail");
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("options_table")
};
