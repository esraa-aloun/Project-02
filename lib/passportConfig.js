const passport = require('passport')

const localStrategy = require('passport-local').Strategy
const User = require('../models/user')


//here we saved the 'user.id'  into  SESSIOIN so the user info will be acccessable by deserialize it
passport.serializeUser( function(user, done){
    done(null, user.id)
})
//HERE to extract any info I want about the user
passport.deserializeUser( function(id, done){
    //here we grabed the whole info of the user from The 'User' data
    User.findById(id, function(err, user){
        done(err, user)

    })
})

passport.use(new localStrategy({
    usernameField: 'emailAddress',
    passwordField: 'password'
},
 function(emailAddress, password, done){
    //search by the email
    User.findOne({emailAddress: emailAddress}, function(err, user){
        if(err){ return done(err) }
        if(!user){ return done(null, false)}
        if(!user.verifyPassword(password)){return done( null, false)}
        return done( null, user)
    }) 
 }
))

module.exports = passport

