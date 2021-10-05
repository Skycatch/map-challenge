const { v4: uuidv4 } = require('uuid')

const { db } = require('../db')

const Location = {
  list: () => {
    return db.get('locations')
      .filter({ isDeleted: 0 })
      .value()
  },

  get: (id) => {
    return db.get('locations')
      .find({ id: id, isDeleted: 0 })
      .value()
  },

  create: (payload) => {
    if (!payload.categoryId) {
      throw new Error('Location should have a categoryId')
    }
    id = uuidv4()
    db.get('locations')
      .push(Object.assign({}, payload, { id, isDeleted: 0 }))
      .write()
    return Location.get(id)
  },

  update: (id, payload) => {
    return db.get('locations')
      .find({ id: id, isDeleted: 0 })
      .assign(payload)
      .write()
  },

  delete: (id) => {
    return db.get('locations')
      .find({ id })
      .assign({ isDeleted: 1 })
      .write()
  }
}

module.exports = Location