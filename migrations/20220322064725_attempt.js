/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("attempt_table", (table) => {
      table.increments();
      table.integer("attempts");
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
    return knex.schema.dropTable("attempt_table");
};
