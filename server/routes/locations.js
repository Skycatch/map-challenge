const express = require('express')
const validations = require('../middleware/validationCreateLocation')
const router = express.Router()

const controller = require('../controllers/locations')

router.get('/', controller.list)
router.get('/:id', controller.get)
router.post('/',validations ,controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router