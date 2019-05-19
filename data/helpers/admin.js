const db = require('../config/dbConfig')

module.exports = {
  get: function (id) {
    let query = db('admin').select(
      'id',
      'firstname',
      'lastname',
      'username'
    )

    if (id) {
      query.where('id', id).first()
    }

    return query
  }
}