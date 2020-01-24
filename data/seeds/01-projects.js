exports.seed = function(knex) {
  return knex('projects').insert([
    {name: 'learn node', description: 'study and practice node and express'},
    {name: 'learn ruby', description: 'study and practice ruby and rails'},
    {name: 'learn tailwind', description: 'study and practice tailwind css tool'},
  ]);
};
