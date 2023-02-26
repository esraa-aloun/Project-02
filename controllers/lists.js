const Item = require('../models/Item')
const User = require('../models/user')
//const List = require('../models/List')

exports.list_addItem_get = (req, res) => {
    res.render('lists/add')
}
exports.list_addItem_post = (req, res) => {
     console.log(req.user._id)
     console.log(req.session.passport.user)
    // let user_id = req.session.passport.user
    //{owner: req.session.passport.user}
    let item = new Item(req.body)
    item.owner = req.user._id
    item.save()
    .then(() => {
            res.redirect('/')
            console.log('bb')
        })
      
    .catch( err => {
            console.log('err')
        })

   // console.log(req.body)
 
    // User.findById(req.session.passport.user)
    // .then(user => {
    // let listId = user.list
    // console.log(user)
    // let item = new Item({list: listId },req.body)      
    // item.save()  
    
    // .then(() => {
    //     res.redirect('/')
    //     console.log('bb')
    // })
   

    // })
    // .catch( err => {
    //     console.log('err')
    // })



   
    // ownerList = req.session.passport.user
    // console.log(ownerList)
    // item.owner_id = ownerList
    // console.log('nono',item.owner_id)


}

exports.list_show_get = (req, res) => {

    Item.find().populate('User')

    
    .then(list => {
       console.log(list)
       res.render('lists/show', {list})

    })
    .catch( err => {
        console.log('err')
    })

}