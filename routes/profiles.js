const express = require('express')

const router = express.Router()

const profileControl = require('../controllers/profile')
let isLoggedin = require('../lib/isLoggedin')
const multer = require('multer')
const path = require('path')



//Calling APIs


router.get('/profiles/show', isLoggedin, profileControl.profile_show_get)
router.post('/profiles/edit', isLoggedin, profileControl.profile_edit_post)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+'.'+file.originalname.split('.').pop())
    }
})

const upload = multer({ storage: storage })
router.post('/profile/addImg', upload.single('profile-pic'), profileControl.profile_upload_post)

//(req,res)=>{console.log(req.file.filename)}
    


//Export
module.exports = router