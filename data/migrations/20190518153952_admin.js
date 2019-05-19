exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', function(tbl) {
    tbl.increments()

    tbl.string('firstname', 50).notNullable()

    tbl.string('lastname', 50).notNullable()

    tbl.string('schoolname', 50).notNullable().unique()
    tbl.string('school_level', 50).notNullable()
    tbl.string('school_city', 50).notNullable()
    tbl.string('school_state', 50).notNullable()

    tbl
      .string('username', 50)
      .notNullable()
      .unique()

    tbl.string('password', 50).notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('admin')
}
