/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category_table').del()
  await knex('category_table').insert([
    {category: 'General Knowledge'},
    {category: 'Computer Fundamentals'},
    {category: 'English Vocabulary'},
    {category: 'Geography'},
    {category: 'Mathematics'}
  ]);
};
