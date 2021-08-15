const Category = require('../models/category')

const controller = {

  list: (req, res) => {
    try {
      result = Category.list()
      res.status(200).json({ data: result })
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  },

  get: (req, res) => {
    try {
      result = Category.get(req.params.id)
      res.status(200).json({ data: result })
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  },

  create: (req, res) => {
    try {
      result = Category.create(req.body)
      res.status(200).json({ data: result })
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  },

  update: (req, res) => {
    try {
      result = Category.update(req.params.id, req.body)
      res.status(200).json({ data: result })
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  },

  delete: (req, res) => {
    try {
      result = Category.delete(req.params.id)
      res.status(200).json({ data: result })
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = controller