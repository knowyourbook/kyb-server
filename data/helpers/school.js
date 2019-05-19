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
      query.where('id', id).first()
    }

    return query
  }
}
