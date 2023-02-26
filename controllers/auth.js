
const User = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('../lib/passportConfig')


exports.auth_signup_get = (req, res) => {
    res.render('auth/signup')
}
exports.auth_signup_post = (req, res) => {
    let user = new User(req.body)
    console.log(user.firstName)
    let hash = bcrypt.hashSync(req.body.password, 10)
    console.log(hash)
    user.password = hash
    user.save()
    .then(() => {
        res.redirect('/auth/signin')
    })
    .catch((err) => {
        console.log('err')
    })
}

exports.auth_signin_get = (req, res) => {
    res.render('auth/signin')
}

exports.auth_signin_post = passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/auth/signin'
}) 

exports.auth_signout_get = (req, res) => {
    req.logout(function (err){
        if(err){return next()}    
         res.redirect('/auth/signin')
    })
}




