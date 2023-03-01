const User = require('../models/user')


exports.profile_show_get = (req ,res) => {
    //grab the user id from the session
    //User.findById()
    //fetching the user data then sand it by .then()

    User.findById(req.session.passport.user)
    
    .then(profile => {
       res.render('profiles/show', {profile})

    })
    .catch( err => {
        console.log('err')
    })
   
}

exports.profile_edit_post = (req ,res) => {
    User.findByIdAndUpdate(req.session.passport.user, req.body)    
    .then(() => {
        console.log('done')
        res.redirect('/profiles/show')
    })
    .catch( err => {
        console.log(err)
    })
}

exports.profile_upload_post = (req, res) => {
    console.log('upload image', req.body)
    User.findByIdAndUpdate(req.user._id, {img : req.file.filename})
    .then(()=>{
        res.redirect('/profiles/show')
    })
    .catch(()=>{
        console.log('err')
    }
    )
}