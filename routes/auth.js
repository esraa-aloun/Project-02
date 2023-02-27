const express = require('express')

const router = express.Router()

const authCtrl = require('../controllers/auth')

router.get('/auth/signup', authCtrl.auth_signup_get)
router.post('/auth/signup', authCtrl.auth_signup_post)



router.get('/auth/signin', authCtrl.auth_signin_get)
router.post('/auth/signin', authCtrl.auth_signin_post)

router.get('/auth/signout', authCtrl.auth_signout_get)

router.get('/auth/changepassword', authCtrl.auth_changepassword_get)
router.post('/auth/changepassword', authCtrl.auth_changepassword_post)



module.exports = router