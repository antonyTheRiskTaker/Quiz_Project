/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("question_table", (table) => {
    table.increments();
    table.integer("category_id").unsigned();
    table.foreign("category_id").references("category_table.id");
    table.string("question");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("question_table");
};
