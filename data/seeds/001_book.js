exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').then(function() {
    // Inserts seed entries
    return knex('book').insert([
      { title: 'book-1', author: 'author-1' },
      { title: 'book-2', author: 'author-2' },
      { title: 'book-3', author: 'author-3' },
      { title: 'book-4', author: 'author-1' },
      { title: 'book-5', author: 'author-2' },
      { title: 'book-6', author: 'author-3' }
    ])
  })
}
