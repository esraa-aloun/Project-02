const Item = require('../models/Item')
const User = require('../models/user')
const multer = require('multer')
const upload = multer({dest: 'public/uploads'})
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

    Item.find().populate('owner')

    
    .then(list => {
      // console.log(list)
       res.render('lists/show', {list})

    })
    .catch( err => {
        console.log('err')
    })

}

exports.list_editItem_get =(req, res) =>{
   let itemID = req.query.id
   console.log('item id',itemID)
   Item.findById(itemID)
   .then(item => {
    //console.log(list)
    res.render('lists/edit', {item})

 })
   .catch( err => {
    console.log('err')
})
  
}

exports.list_editItem_post =(req, res) =>{

    let itemId = req.body.id
    console.log('item post',itemId)
    Item.findByIdAndUpdate(itemId, req.body)
    .then(()=> {
      
        res.redirect('/lists/show')
    
     })
       .catch( err => {
        console.log('err')
    })
   
   
 }

 exports.list_deleteItem_get=(req, res) => {
    let itemID = req.query.id
    Item.findByIdAndDelete(itemID)
    .then(()=> {
      
        res.redirect('/lists/show')
    
     })
       .catch( err => {
        console.log('err')
    })
   
 }


 
exports.list_addImg_post = (req, res) =>{
    console.log(req.file)
}
