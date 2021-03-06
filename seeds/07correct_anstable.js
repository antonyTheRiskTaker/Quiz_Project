/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('correct_anstable').del()
  await knex('correct_anstable').insert([
    {question_id: 1, option_id: 1},
    {question_id: 2, option_id: 8},
    {question_id: 3, option_id: 10},
    {question_id: 4, option_id: 13},
    {question_id: 5, option_id: 18},
    {question_id: 6, option_id: 23},
    {question_id: 7, option_id: 28},
    {question_id: 8, option_id: 30},
    {question_id: 9, option_id: 35},
    {question_id: 10, option_id: 37},
    {question_id: 11, option_id: 43},
    {question_id: 12, option_id: 47},
    {question_id: 13, option_id: 52},
    {question_id: 14, option_id: 54},
    {question_id: 15, option_id: 57},
    {question_id: 16, option_id: 61},
    {question_id: 17, option_id: 65},
    {question_id: 18, option_id: 70},
    {question_id: 19, option_id: 76},
    {question_id: 20, option_id: 77},
    {question_id: 21, option_id: 84},
    {question_id: 22, option_id: 86},
    {question_id: 23, option_id: 89},
    {question_id: 24, option_id: 95},
    {question_id: 25, option_id: 100},
    {question_id: 26, option_id: 101},
    {question_id: 27, option_id: 107},
    {question_id: 28, option_id: 110},
    {question_id: 29, option_id: 113},
    {question_id: 30, option_id: 119},
    {question_id: 31, option_id: 121},
    {question_id: 32, option_id: 127},
    {question_id: 33, option_id: 132},
    {question_id: 34, option_id: 135},
    {question_id: 35, option_id: 139},
    {question_id: 36, option_id: 141},
    {question_id: 37, option_id: 147},
    {question_id: 38, option_id: 149},
    {question_id: 39, option_id: 156},
    {question_id: 40, option_id: 158},
    {question_id: 41, option_id: 164},
    {question_id: 42, option_id: 168},
    {question_id: 43, option_id: 170},
    {question_id: 44, option_id: 173},
    {question_id: 45, option_id: 177},
    {question_id: 46, option_id: 183},
    {question_id: 47, option_id: 187},
    {question_id: 48, option_id: 191},
    {question_id: 49, option_id: 196},
    {question_id: 50, option_id: 199}
  ]);
};
