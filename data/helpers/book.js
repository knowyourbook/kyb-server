const db = require('../config/dbConfig')

module.exports = {
  get: function(id) {
    let query = db('book').select()

    if (id) {
      query.where('id', id).first()
    }

    return query
  }
}
