/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_table').del()
  await knex('user_table').insert([
    {username: 'Admin', password: 'admin123', role: 'admin'},
    {username: 'User1', password: 'user123', role: 'user'},
    {username: 'User2', password: 'user456', role: 'user'}
  ]);
};
