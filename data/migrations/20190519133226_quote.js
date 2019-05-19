exports.up = function(knex, Promise) {
  return knex.schema.createTable('quote', function (tbl) {
    tbl.increments()

    tbl.string('text', 255).notNullable()

    tbl.integer('page').notNullable()

    tbl
      .integer('submitted_by')
      .notNullable()
      .references('id')
      .inTable('student')
      .onDelete('CASCADE')

    tbl
      .boolean('approved')
      .defaultTo(false)

    tbl
      .integer('book_id')
      .notNullable()
      .references('id')
      .inTable('book')
      .onDelete('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quote')
}
