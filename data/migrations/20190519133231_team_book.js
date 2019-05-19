exports.up = function(knex, Promise) {
  return knex.schema.createTable('team_book', function(tbl) {
    tbl.increments()

    tbl
      .integer('team_id')
      .notNullable()
      .references('id')
      .inTable('team')
      .onDelete('CASCADE')

    tbl
      .integer('book_id')
      .notNullable()
      .references('id')
      .inTable('book')
      .onDelete('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('team_book')
}
