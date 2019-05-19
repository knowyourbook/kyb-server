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
        schoolname: 'schoolname_1',
        school_level: 'K-6',
        school_city: 'Houston',
        school_state: 'Texas'
      },
      {
        firstname: 'admin-2',
        lastname: 'last',
        username: 'admin-2',
        password: 'password123',
        schoolname: 'schoolname_2',
        school_level: 'K-6',
        school_city: 'Houston',
        school_state: 'Texas'
      },
      {
        firstname: 'admin-3',
        lastname: 'last',
        username: 'admin-3',
        password: 'password123',
        schoolname: 'schoolname_3',
        school_level: 'K-6',
        school_city: 'Houston',
        school_state: 'Texas'
      },
      {
        firstname: 'admin-4',
        lastname: 'last',
        username: 'admin-4',
        password: 'password123',
        schoolname: 'schoolname_4',
        school_level: 'K-6',
        school_city: 'Houston',
        school_state: 'Texas'
      },
      {
        firstname: 'admin-5',
        lastname: 'last',
        username: 'admin-5',
        password: 'password123',
        schoolname: 'schoolname_5',
        school_level: 'K-6',
        school_city: 'Houston',
        school_state: 'Texas'
      },
      {
        firstname: 'admin-6',
        lastname: 'last',
        username: 'admin-6',
        password: 'password123',
        schoolname: 'schoolname_6',
        school_level: 'K-6',
        school_city: 'Houston',
        school_state: 'Texas'
      }
    ])
  })
}
