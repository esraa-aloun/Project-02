const express = require('express')

const router = express.Router()


//Calling APIs
const listCtrl = require('../controllers/lists')

router.get('/lists/add', listCtrl.list_add_get)
router.post('/lists/add', listCtrl.list_add_post)
router.get('/lists/show', listCtrl.list_show_get)






//Export
module.exports = router