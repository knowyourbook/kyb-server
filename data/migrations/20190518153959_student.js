exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', function(tbl) {
    tbl.increments()

    tbl.string('firstname', 50).notNullable()

    tbl.string('lastname', 50).notNullable()

    tbl
      .string('username', 50)
      .notNullable()
      .unique()

    tbl.string('password', 50).notNullable()

    tbl
      .integer('team_id')
      .notNullable()
      .references('id')
      .inTable('team')
      .onDelete('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student')
}
