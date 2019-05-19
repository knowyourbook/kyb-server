exports.up = function(knex, Promise) {
  return knex.schema.createTable('school', function(tbl) {
    tbl.increments()

    tbl.string('name', 255).notNullable()

    tbl.string('city', 255).notNullable()

    tbl.string('state', 255).notNullable()

    tbl
      .integer('level_id')
      .notNullable()
      .references('id')
      .inTable('school_level')
      .onDelete('CASCADE')

    tbl.unique(['name', 'city', 'state'])
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('school')
}
