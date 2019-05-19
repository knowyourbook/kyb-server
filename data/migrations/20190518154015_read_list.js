exports.up = function(knex, Promise) {
  return knex.schema.createTable('read_list', function(tbl) {
    tbl
      .integer('student_id')
      .notNullable()
      .references('id')
      .inTable('student')
      .onDelete('CASCADE')

    tbl
      .integer('team_book_id')
      .notNullable()
      .references('id')
      .inTable('team_book')
      .onDelete('CASCADE')

    tbl.primary(['student_id', 'team_book_id'])
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('read_list')
}
