exports.seed = function(knex, Promise) {
  return knex('student_book').then(function() {
    return knex('student_book').insert([
      { student_id: 1, book_id: 1 },
      { student_id: 2, book_id: 2 },
      { student_id: 3, book_id: 3 },
      { student_id: 4, book_id: 1 },
      { student_id: 5, book_id: 2 },
      { student_id: 6, book_id: 3 }
    ])
  })
}
