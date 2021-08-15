const { v4: uuidv4 } = require('uuid')

const { db } = require('../db')

const Category = {
  list: () => {
    return db.get('locations')
      .filter({ is_deleted: 0 })
      .value()
  },

  get: (id) => {
    return db.get('locations')
      .find({ id: id, is_deleted: 0 })
      .value()
  },

  create: (payload) => {
    if (!payload.category_id) {
      throw new Error('Location should have a category_id')
    }
    id = uuidv4()
    db.get('locations')
      .push(Object.assign({}, payload, { id, is_deleted: 0 }))
      .write()
    return Category.get(id)
  },

  update: (id, payload) => {
    return db.get('locations')
      .find({ id: id, is_deleted: 0 })
      .assign(payload)
      .write()
  },

  delete: (id) => {
    return db.get('locations')
      .find({ id })
      .assign({ is_deleted: 1 })
      .write()
  }
}

module.exports = Category