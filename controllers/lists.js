const List = require('../models/List')
const User = require('../models/user')

exports.list_add_get = (req, res) => {
    res.render('lists/add')
}
exports.list_add_post = (req, res) => {

    console.log(req.body)

    let item = new List(req.body)
    // ownerList = req.session.passport.user
    // console.log(ownerList)
    // item.owner_id = ownerList
    // console.log('nono',item.owner_id)
    
    item.save()  
    
    .then(() => {
        res.redirect('/')
    })
    .catch( err => {
        console.log('err')
    })

}

exports.list_show_get = (req, res) => {

    List.findById(req.session.passport.user)
    
    
    .then(list => {
       console.log(list)
       res.render('lists/show', {list})

    })
    .catch( err => {
        console.log('err')
    })

}