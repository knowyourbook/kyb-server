const db = require('../config/dbConfig')

module.exports = {
  get: function (id) {
    let query = db('admin').select(
      'admin.id',
      'admin.firstname',
      'admin.lastname',
      'admin.username',
      'school.name as school'
    ).join('school', 'school.id','admin.school_id')

    if (id) {
      query.where('admin.id', id).first()
    }

    return query
  },
  getByUsername: function (username) {
    return db('admin').select().where('username', username).first()
  },
  insert: function (admin) {
    return db('admin').insert(admin)
  },
  update: function (admin, id) {
    return db('admin').where('id',id).update(admin)
  }
}