const express = require('express')
const router = express.Router()
const {getCategories , addCategory} = require ('../controller/catControler')

router.get('/',getCategories)
router.post('/add',addCategory)

module.exports = router  