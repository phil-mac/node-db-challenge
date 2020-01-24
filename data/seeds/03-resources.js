exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'laptop', description: 'macbook pro'},
    {name: 'hand warmer', description: 'used to enable programming in cold garage'},
    {name: 'desk chair', description: ''},
    {name: 'keyboard', description: 'mechanical'}
  ]);
};
