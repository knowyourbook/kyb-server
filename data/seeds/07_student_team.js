exports.seed = function(knex, Promise) {
  return knex('student_team').then(function() {
    return knex('student_team').insert([
      { student_id: 1, team_id: 1 },
      { student_id: 2, team_id: 2 },
      { student_id: 3, team_id: 3 },
      { student_id: 4, team_id: 1 },
      { student_id: 5, team_id: 2 },
      { student_id: 6, team_id: 3 }
    ])
  })
}
