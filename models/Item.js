const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({

    owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    dramaName: {type: String, required: true},
    episodeNum: {type: Number, required: true},
    progress: {type: Number, default: 0},
    score:{type: Number, default: 0},
    dramaStatus: {type: String , default: 'cw'}     
   
},
{
    timestamps: true
})



const Item = mongoose.model('Item', ItemSchema)

module.exports = Item