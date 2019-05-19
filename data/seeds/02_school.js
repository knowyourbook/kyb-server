exports.seed = function(knex, Promise) {
  return knex('school').then(function() {
    return knex('school').insert([
      {
        name: 'Blue Ridge Elementary',
        level_id: 1,
        city: 'Houston',
        state: 'Texas'
      },
      {
        name: 'Moon Shine Elementary',
        level_id: 1,
        city: 'Houston',
        state: 'Texas'
      },
      {
        name: 'Coppertone Middle',
        level_id: 2,
        city: 'Houston',
        state: 'Texas'
      },
      { name: 'Polk Middle', level_id: 2, city: 'Houston', state: 'Texas' },
      { name: 'Bone High', level_id: 3, city: 'Houston', state: 'Texas' }
    ])
  })
}
