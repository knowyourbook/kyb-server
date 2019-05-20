const db = require('../config/dbConfig')

module.exports = {
  get: function(id) {
    let query = db('school')
      .select(
        'school.id',
        'school.name',
        'school.city',
        'school.state',
        'school_level.name as level'
      )
      .join('school_level', 'school_level.id', 'school.level_id')

    if (id) {
      query.where('school.id', id).first()
    }

    return query
  },
  insert: function (school) {
    return db('school').insert(school)
  },
  remove: function (id) {
    return db('school').where('id', id).del()
  },
  update: function (school, id) {
    return db('school').where('id',id).update(school)
  }
}
