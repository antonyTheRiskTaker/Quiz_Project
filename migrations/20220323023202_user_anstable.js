/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("user_anstable", (table) => {
      table.increments();
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("user_table.id");
      table.integer("question_id").unsigned();
      table.foreign("question_id").references("question_table.id");
      table.integer("option_id").unsigned();
      table.foreign("option_id").references("options_table.id");
      // table.string("user_answer");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user_anstable");
};
