exports.up = function(knex, Promise) {
  return knex.schema.createTable('student_book', function(tbl) {
    tbl.increments()

    tbl
      .integer('student_id')
      .notNullable()
      .references('id')
      .inTable('student')
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
  return knex.schema.dropTableIfExists('student_book')
}
