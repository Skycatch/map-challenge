const { v4: uuidv4 } = require('uuid')

const { db } = require('../db')

const Category = {
  list: () => {
    return db.get('categories')
      .filter({ is_deleted: 0 })
      .value()
  },

  get: (id) => {
    return db.get('categories')
      .find({ id: id, is_deleted: 0 })
      .value()
  },

  create: (payload) => {
    id = uuidv4()
    db.get('categories')
      .push(Object.assign({}, payload, { id, is_deleted: 0 }))
      .write()
    return Category.get(id)
  },

  update: (id, payload) => {
    return db.get('categories')
      .find({ id: id, is_deleted: 0 })
      .assign(payload)
      .write()
  },

  delete: (id) => {
    return db.get('categories')
      .find({ id })
      .assign({ is_deleted: 1 })
      .write()
  }
}

module.exports = Category