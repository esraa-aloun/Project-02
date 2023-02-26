const express = require('express')

const router = express.Router()

const profileControl = require('../controllers/profile')
let isLoggedin = require('../lib/isLoggedin')

//Calling APIs


router.get('/profiles/show', isLoggedin, profileControl.profile_show_get)
router.post('/profiles/edit', isLoggedin, profileControl.profile_edit_post)



//Export
module.exports = router