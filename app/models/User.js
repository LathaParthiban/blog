const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: [true | 'email should be unique'],
        minlength:5

    },
    email:{
        type: String,
        required:true,
        unique:true,
        // how to validate format of an email
        // using mongoose's custom validators
        validate:{
            validator:function(v){         
                return validator.isEmail(v)
            },
            message:function(){
                console.log('invalid email ID')
            }
        }

    },
    password:{
        type: String,
        required:true,
       // passwords need not to be unique
        minlength: 6,
        maxlength: 128

    }
})

//pre hooks - mongoose middlewares
// instance method 
// we can synchronous version of encrypting password , ie using async/await
userSchema.pre('save',function(next){
    const user = this       // refers to user object in UsersController.js
    bcryptjs.genSalt()
     .then(function(salt){
         bcryptjs.hash(user.password,salt)
            .then(function(encryptedPassword)
            {
                user.password = encryptedPassword
                next()
            })
     })
})

const User = mongoose.model('User',userSchema)

module.exports = {
    User
}