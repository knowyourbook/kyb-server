exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('read_list').then(function() {
    // Inserts seed entries
    return knex('read_list').insert([
      {student_id: 1, team_book_id:1},
      {student_id: 2, team_book_id:2},
      {student_id: 3, team_book_id:1},
      {student_id: 4, team_book_id:2},
      {student_id: 5, team_book_id:3},
      {student_id: 6, team_book_id:4},
      {student_id: 1, team_book_id:5}
    ])
  })
}
