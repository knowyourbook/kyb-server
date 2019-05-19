exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('team').then(function() {
    // Inserts seed entries
    return knex('team').insert([
      { name: 'team-1', description: 'team number 1', school_id: 1 },
      { name: 'team-2', description: 'team number 2', school_id: 2 },
      { name: 'team-3', description: 'team number 3', school_id: 3 },
      { name: 'team-4', description: 'team number 4', school_id: 4 },
      { name: 'team-5', description: 'team number 5', school_id: 5 },
      { name: 'team-6', description: 'team number 6', school_id: 1 }
    ])
  })
}
