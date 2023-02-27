
const User = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('../lib/passportConfig')


exports.auth_signup_get = (req, res) => {
    res.render('auth/signup')
}

exports.auth_signup_post = (req, res) => {
    
    // let user = new User(req.body)
    // console.log(user.firstName)
    // let hash = bcrypt.hashSync(req.body.password, 10)
    // console.log(hash)
    // user.password = hash
    // user.save()

    // .then((user) => {
    //     let userId = user._id
    //     let list = new List({owner: userId})
        
    //     list.save()
       
    //     res.redirect('/auth/signin')

    // })
    // .catch((err) => {
    //     console.log('err')
    // })

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

exports.auth_changepassword_get = (req, res) =>{
    res.render('auth/changepassword')
}


exports.auth_changepassword_post = (req, res) =>{
    let currentPassword = req.body.currentPassword
    console.log(currentPassword)
  
    // let newPassword = req.body.newPassword

    let user = User.findById(req.user._id)
    DBPassword = user.password
    console.log(DBPassword)
    // let hash = bcrypt.hashSync(currentPassword, 10)


    //test
    let verify = bcrypt.compareSync(currentPassword, DBPassword)

    if (verify === false) {
        res.status(400).send('Invalid Password')
    } else {
        res.send("It's a match!")
    }
}




