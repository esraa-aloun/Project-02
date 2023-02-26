
const express = require('express')

const router = express.Router()

const indexControl = require('../controllers/index')

//Calling APIs


router.get('/', indexControl.index_get)



//Export
module.exports = router