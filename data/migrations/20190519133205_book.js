exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(tbl) {
    tbl.increments()

    tbl.string('title', 255).notNullable()

    tbl.string('author', 255).notNullable()

    tbl.unique(['title', 'author'])
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
}
