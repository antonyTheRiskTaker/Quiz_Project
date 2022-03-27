/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_anstable').del()
  await knex('user_anstable').insert([
    {user_id: 2, question_id: 2, option_id: 1},
    {user_id: 2, question_id: 3, option_id: 6},
    {user_id: 2, question_id: 4, option_id: 10},
    {user_id: 2, question_id: 5, option_id: 14},
    {user_id: 2, question_id: 6, option_id: 18},
    {user_id: 2, question_id: 7, option_id: 23}
  ]);
};
