/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('attempt_table').del()
  await knex('attempt_table').insert([
    {attempts: 5, user_id: 2, category_id: 2},
    {attempts: 9, user_id: 3, category_id: 5}
  ]);
};
