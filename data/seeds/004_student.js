exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').then(function() {
    // Inserts seed entries
    return knex('student').insert([
      {
        firstname: 'student-1',
        lastname: 'last',
        username: 'student-1',
        password: 'password123',
        team_id: 1
      },
      {
        firstname: 'student-2',
        lastname: 'last',
        username: 'student-2',
        password: 'password123',
        team_id: 2
      },
      {
        firstname: 'student-3',
        lastname: 'last',
        username: 'student-3',
        password: 'password123',
        team_id: 3
      },
      {
        firstname: 'student-4',
        lastname: 'last',
        username: 'student-4',
        password: 'password123',
        team_id: 1
      },
      {
        firstname: 'student-5',
        lastname: 'last',
        username: 'student-5',
        password: 'password123',
        team_id: 2
      },
      {
        firstname: 'student-6',
        lastname: 'last',
        username: 'student-6',
        password: 'password123',
        team_id: 3
      }
    ])
  })
}
