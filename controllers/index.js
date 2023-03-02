let User = require('../models/user')


exports.index_get = (req ,res) => {
        
    User.findById(req.session.passport.user)
    
    .then(profile => {
       res.render('home/index', {profile})

    })
    .catch( err => {
        console.log('err')
    })
    // res.render('home/index')
}