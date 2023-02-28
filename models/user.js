const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    emailAddress: {type: String, required: true},
    password: {type: String, required: true},
    img: {type: String , default: 'default.png'}
},
{
    timestamps: true
})

userSchema.methods.verifyPassword = function(password){
    console.log('pp',password)
    return bcrypt.compareSync( password, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User