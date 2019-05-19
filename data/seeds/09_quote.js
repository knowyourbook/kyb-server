exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quote').then(function() {
    // Inserts seed entries
    return knex('quote').insert([
      { text: 'quote something 01', page: 1, submitted_by: 1, book_id: 1 },
      { text: 'quote something 02', page: 2, submitted_by: 2, book_id: 2 },
      { text: 'quote something 03', page: 3, submitted_by: 3, book_id: 3 },
      { text: 'quote something 04', page: 4, submitted_by: 6, book_id: 1 },
      { text: 'quote something 05', page: 5, submitted_by: 4, book_id: 2 },
      { text: 'quote something 06', page: 6, submitted_by: 3, book_id: 4 },
      { text: 'quote something 07', page: 7, submitted_by: 5, book_id: 6 },
      { text: 'quote something 08', page: 8, submitted_by: 1, book_id: 5 },
      { text: 'quote something 09', page: 9, submitted_by: 4, book_id: 2 },
      { text: 'quote something 10', page: 10, submitted_by: 5, book_id: 4 }
    ])
  })
}
