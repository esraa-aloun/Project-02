const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({

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



const List = mongoose.model('List', ListSchema)

module.exports = List