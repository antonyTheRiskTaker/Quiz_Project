/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('question_table').del()
  await knex('question_table').insert([
    {category_id: 1, question: 'what does NATO stands for?'},
    {category_id: 1, question: 'Where is the official home of Santa Claus?'},
    {category_id: 1, question: 'Which is the smallest country in the world?'},
    {category_id: 1, question: 'What is the largest country in the world in terms of land area?'},
    {category_id: 1, question: 'What is the capital of Estonia?'},
    {category_id: 1, question: 'Which of the following country has given first time voting rights to women?'},
    {category_id: 1, question: 'Which of the following country is the most populous country?'},
    {category_id: 1, question: 'Which country has highest sex ratio in world?'},
    {category_id: 1, question: 'Which is the safest country in Asia?'},
    {category_id: 1, question: 'Which of following countries has highest per capita income in the world?'},
    {category_id: 2, question: '.TMP extension refers usually to what kind of file?'},
    {category_id: 2, question: 'What do we call a collection of two or more computers that are located within a limited distance of each other and that are connected to each other directly or indirectly?'},
    {category_id: 2, question: '.JPG extension refers usually to what kind of file?'},
    {category_id: 2, question: 'In what year was the "@" chosen for its use in e-mail addresses?'},
    {category_id: 2, question: '.TXT extension refers usually to what kind of file?'},
    {category_id: 2, question: 'What was the first ARPANET message?'},
    {category_id: 2, question: 'Compact discs, (according to the original CD specifications) hold how many minutes of music?'},
    {category_id: 2, question: 'DTP computer abbreviation usually means?'},
    {category_id: 2, question: 'CD computer abbreviation usually means?'},
    {category_id: 2, question: '.BAK extension refers usually to what kind of file?'},
    {category_id: 3, question: 'What is another word which means the same as NOMADIC?'},
    {category_id: 3, question: 'Find the word which has the same meaning as CLEAVE.'},
    {category_id: 3, question: 'Fill the blank with the appropriate word: THE DECISION WILL _____ THE ENTIRE NATION.'},
    {category_id: 3, question: 'What is another word for PRECARIOUS?'},
    {category_id: 3, question: 'What is the synonym of the word PAROCHIAL?'},
    {category_id: 3, question: 'Find the word that has the same meaning as IMPOVERISHED.'},
    {category_id: 3, question: 'Which of the following word means to recede back?'},
    {category_id: 3, question: 'What word corresponds to the meaning of being implied without being stated.'},
    {category_id: 3, question: 'Select the right antonym of the word AMICABLE.'},
    {category_id: 3, question: 'Find the word which is a synonym for BERATED.'},
    {category_id: 4, question: 'Instrument used to measure earthquake is known as'},
    {category_id: 4, question: 'Magnitude of energy released by an earthquake is calculated using'},
    {category_id: 4, question: 'The point within the Earth where earthquakes originate is:'},
    {category_id: 4, question: 'Place directly above focus on Earth surface is known as'},
    {category_id: 4, question: 'In general, the most destructive earthquake waves are the __________ .'},
    {category_id: 4, question: 'P Waves are also said to be __________ waves.'},
    {category_id: 4, question: 'P Waves can pass through ______'},
    {category_id: 4, question: 'Earthquakes occur most frequently at'},
    {category_id: 4, question: 'Amount of energy released by an earthquake is also known as'},
    {category_id: 4, question: 'How many seismograph stations are needed to locate the epicenter of an earthquake ?'},
    {category_id: 5, question: 'The two straight lines in the same plane which never meet are called'},
    {category_id: 5, question: 'The locus of a point in a plane equidistant from a fixed point is known as'},
    {category_id: 5, question: 'The opposite angles of any quadrilateral inscribed in a circle are'},
    {category_id: 5, question: 'The angle subtended between any two chords of a circle, having common point on its circumference is called'},
    {category_id: 5, question: 'The set of all the ordered pair (x, y) which satisfies the system of equations is called'},
    {category_id: 5, question: 'A line which cuts a pair of parallel lines is called'},
    {category_id: 5, question: 'An angle whose value is ____, is called complete angle.'},
    {category_id: 5, question: 'A, B and C can complete a piece of work in 14, 6 and 12 days respectively. Working together, they will complete the work in'},
    {category_id: 5, question: 'A shopkeeper purchases 15 mangoes for Rs. 10 and sells them at 10 mangoes for Rs. 15. Thus, he earns a profit of'},
    {category_id: 5, question: 'If a certain sum of money can become 5 times of its principal in 10 years, then the rate of interest is'}
  ]);
};