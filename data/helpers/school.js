const db = require('../config/dbConfig')

module.exports = {
  get: function (id) {
    let query = db('admin').select(
      'id',
      'schoolname',
      'school_level',
      'school_city',
      'school_state'
    )

    if (id) {
      query.where('id', id).first()
    }

    return query
  }
}