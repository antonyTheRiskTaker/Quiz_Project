/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("score_table", (table) => {
      table.increments();
      table.integer("score");
      table.integer("user_id").unsigned().unique();
      table.foreign("user_id").references("user_table.id");
      table.integer("category_id").unsigned();
      table.foreign("category_id").references("category_table.id");

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("score_table");
};
