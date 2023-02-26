const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({

    owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        } ,
    key: {type: String , default: 'nn'}

   
},
{
    timestamps: true
})



const List = mongoose.model('List', ListSchema)

module.exports = List