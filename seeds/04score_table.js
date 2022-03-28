/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('score_table').del()
  await knex('score_table').insert([
    {user_id: 2, category_id: 1, score: 250},
    // // {user_id: 2, category_id: 2, score: 390},
    // {user_id: 3, category_id: 2, score: 450}
    // {user_id: 3, category_id: 2, score: 290}
  ]);
};
