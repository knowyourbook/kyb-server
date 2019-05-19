exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('team_book').then(function() {
    // Inserts seed entries
    return knex('team_book').insert([
      { team_id: 1, book_id: 1 },
      { team_id: 2, book_id: 1 },
      { team_id: 3, book_id: 1 },
      { team_id: 4, book_id: 1 },
      { team_id: 5, book_id: 1 },
      { team_id: 6, book_id: 1 },
      { team_id: 1, book_id: 2 },
      { team_id: 2, book_id: 2 },
      { team_id: 3, book_id: 2 },
      { team_id: 4, book_id: 2 },
      { team_id: 5, book_id: 2 },
      { team_id: 6, book_id: 2 },
      { team_id: 1, book_id: 3 },
      { team_id: 2, book_id: 3 },
      { team_id: 3, book_id: 3 },
      { team_id: 4, book_id: 3 },
      { team_id: 5, book_id: 3 },
      { team_id: 6, book_id: 3 },
      { team_id: 1, book_id: 4 },
      { team_id: 2, book_id: 4 },
      { team_id: 3, book_id: 4 },
      { team_id: 4, book_id: 4 },
      { team_id: 5, book_id: 4 },
      { team_id: 6, book_id: 4 },
      { team_id: 1, book_id: 5 },
      { team_id: 2, book_id: 5 },
      { team_id: 3, book_id: 5 },
      { team_id: 4, book_id: 5 },
      { team_id: 5, book_id: 5 },
      { team_id: 6, book_id: 5 },
      { team_id: 1, book_id: 6 },
      { team_id: 2, book_id: 6 },
      { team_id: 3, book_id: 6 },
      { team_id: 4, book_id: 6 },
      { team_id: 5, book_id: 6 },
      { team_id: 6, book_id: 6 }
    ])
  })
}
