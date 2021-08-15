const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/db.json')
const db = low(adapter)

const initDB = () => {
  // For demo purposes, load the mock data to have some initial records
  const defaultLocations = require('./mocks/locations.mock.js')
  const defaultCategories = require('./mocks/categories.mock.js')
  db.defaults(defaultLocations).write()
  db.defaults(defaultCategories).write()
}

module.exports = {
  db,
  initDB
}