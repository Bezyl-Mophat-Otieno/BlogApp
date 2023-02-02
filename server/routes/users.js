const express = require('express')
const router = express.Router()
const {updateUser,deleteUser,getUser} = require ('../controller/userControler')
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)
router.get('/:id',getUser)


module.exports = router  