const express = require('express')
const router = express.Router()
const { getAllCommentS, writeComment, deleteComment } = require('../controller/commentsControler')

router.get('/', getAllCommentS)
router.post('/write', writeComment)
router.delete('/delete/:id', deleteComment)

module.exports = router  