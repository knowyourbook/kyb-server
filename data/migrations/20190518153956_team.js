exports.up = function(knex, Promise) {
  return knex.schema.createTable('team', function(tbl) {
    tbl.increments()

    tbl.string('name', 50).notNullable()

    tbl.string('description', 50).notNullable()

    tbl
      .integer('admin_id')
      .notNullable()
      .references('id')
      .inTable('admin')
      .onDelete('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('team')
}
