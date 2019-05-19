exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(tbl) {
    tbl.increments()

    tbl
      .string('title', 50)
      .notNullable()
      .unique()

    tbl.string('author', 50).notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
}
