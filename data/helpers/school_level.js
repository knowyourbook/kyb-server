const db = require('../config/dbConfig')

module.exports = {
  get: function(id) {
    let query = db('school_level')
      .select()

    if (id) {
      query.where('id', id).first()
    }

    return query
  }
}
