exports.up = function(knex, Promise) {
  return knex.schema.createTable('student_team', function(tbl) {
    tbl.increments()

    tbl
      .integer('student_id')
      .notNullable()
      .references('id')
      .inTable('student')
      .onDelete('CASCADE')

    tbl
      .integer('team_id')
      .notNullable()
      .references('id')
      .inTable('team')
      .onDelete('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student_team')
}
