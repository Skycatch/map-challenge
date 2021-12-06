const Location = require('../models/location')
const {validationResult } = require("express-validator");

const controller = {

  list: (req, res) => {
    try {
      result = Location.list()
      res.status(200).json({ data: result })
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  },

  get: (req, res) => {
    try {
      result = Location.get(req.params.id)
      res.status(200).json({ data: result })
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  },

  create: (req, res) => {
    try {
      let errors= validationResult(req);
      if (errors.isEmpty()) {
        result = Location.create(req.body)
        res.status(200).json({ data: result })
      } else {
        res.status(400).json({ errors: errors.errors })
      }
      
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  },

  update: (req, res) => {
    try {
      result = Location.update(req.params.id, req.body)
      res.status(200).json({ data: result })
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  },

  delete: (req, res) => {
    try {
      result = Location.delete(req.params.id)
      res.status(200).json({ data: result })
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = controller