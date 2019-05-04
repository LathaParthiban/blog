const bcrypt = require('bcryptjs')

// const password = 'secret345'
const password = 'latha@142'


// bcrypt provides two methods : genSalt and hash - both are async methods , hence returns a promise
// 10 is a default value , its called rounds - which is nothing but cost of processing the data
// higher the rounds value , more secure salt value generated
// salt value generated will be used during user login


// to store User's pwd as encrypted pwd 
// we use mongoose's pre Hook (before saving the data in Db)
// once pwd is encrypted , store User details in the Database


bcrypt.genSalt(10)  
    .then(function(salt){
        console.log(salt)
        bcrypt.hash(password,salt)
            .then(function(encryptedPassword){
                console.log(encryptedPassword)
            })
    })


    // mongoose - preHook(before saving the data in Db), PostHook