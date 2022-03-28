/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("correct_anstable", (table) => {
    table.increments();
    table.integer("question_id").unsigned();
    table.foreign("question_id").references("question_table.id");
    table.integer("option_id").unsigned();
    table.foreign("option_id").references("options_table.id");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("correct_anstable");
};
