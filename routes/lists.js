const express = require('express')


const router = express.Router()


//Calling APIs
const listCtrl = require('../controllers/lists')

router.get('/lists/add', listCtrl.list_addItem_get)
router.post('/lists/add', listCtrl.list_addItem_post)
router.get('/lists/show', listCtrl.list_show_get)
router.get('/lists/edit', listCtrl.list_editItem_get)
router.post('/lists/edit', listCtrl.list_editItem_post)
router.get('/lists/delete', listCtrl.list_deleteItem_get)








//Export
module.exports = router