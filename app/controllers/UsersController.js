const express = require('express')
const router = express.Router()
const {User}= require('../models/User')

const bcrypt = require('bcryptjs')


//to check records inserted
router.get('/',function(req,res){
    User.find()
    .then(function(user)
    {
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
})


//localhost:3000/users/register
router.post('/register', function(req,res){
    // res.send('registration')

    const body = req.body
    const user = new User(body) //to create new document(user data) each time a new user registers
    user.save()
        .then(function(user){
            res.send('User account created successfully')
        })
        .catch(function(err){
            res.send(err)
        })

})

//localhost:3000/users/login
// in MVC , we follow a concept called 'Skinny Controllers , Fat Models' , hence checking email and pwd avaiable at User Model level

router.post('/login', function(req,res){
    const body = req.body

    
    User.findOne({email : body.email})
        .then(function(user){
            if(!user)
            {
                res.status('404').send('invalid Username/password')
            }
            res.send(user)

            bcrypt.compare(body.password, user.password)
            .then(function(result){
                if(result)
                {
                    res.send(user)
                }
                else
                {
                    res.status('404').send('invalid Username/password')
                }
            })
        })
        .catch(function(err){
            res.send(err)
        })
})


//localhost:3000/users/logout
router.delete('/logout', function(req,res){
    
})


module.exports = {
    usersRouter: router
}