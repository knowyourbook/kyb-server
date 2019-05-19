exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').then(function() {
    // Inserts seed entries
    return knex('admin').insert([
      {
        firstname: 'admin-1',
        lastname: 'last',
        username: 'admin-1',
        password: 'password123',
        school_id: 1
      },
      {
        firstname: 'admin-2',
        lastname: 'last',
        username: 'admin-2',
        password: 'password123',
        school_id: 5
      },
      {
        firstname: 'admin-3',
        lastname: 'last',
        username: 'admin-3',
        password: 'password123',
        school_id: 2
      },
      {
        firstname: 'admin-4',
        lastname: 'last',
        username: 'admin-4',
        password: 'password123',
        school_id: 3
      },
      {
        firstname: 'admin-5',
        lastname: 'last',
        username: 'admin-5',
        password: 'password123',
        school_id: 4
      }
    ])
  })
}
