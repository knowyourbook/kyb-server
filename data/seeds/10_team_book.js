exports.seed = function(knex, Promise) {
  return knex('team_book').then(function() {
    return knex('team_book').insert([
      { team_id: 1, book_id: 1 },
      { team_id: 2, book_id: 2 },
      { team_id: 3, book_id: 3 },
      { team_id: 4, book_id: 1 },
      { team_id: 5, book_id: 2 },
      { team_id: 6, book_id: 3 }
    ])
  })
}
