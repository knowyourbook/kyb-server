const db = require('../config/dbConfig')

module.exports = {
  get: function (id) {
    let query = db('student').select(
      'student.id',
      'student.firstname',
      'student.lastname',
      'student.username',
      'school.name as school'
    ).join('school', 'school.id','student.school_id')

    if (id) {
      query.where('id', id).first()
    }

    return query
  },
  getByUsername: function (username) {
    return db('student').select().where('username', username).first()
  },
}