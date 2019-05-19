exports.up = function(knex, Promise) {
  return knex.schema.createTable('school_level', function(tbl) {
    tbl.increments()

    tbl
      .string('name', 50)
      .notNullable()
      .unique()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('school_level')
}
