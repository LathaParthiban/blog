// jwt - json web tokens
// can be encoded and decoded , unlike bcryptjs
// has three parts : Header , Payload (data), signature
// user logs in , token is pushed into our Tokens array in User
// user logs out , token is poped out of our Tokens array in User

// jwt throws an error at runtime , then our app will crash , so we need to use try-catch block while 
// verifying jwt entered by user is valid and matches 


const jwt = require('jsonwebtoken')

const tokenData = {
    id: 1,
    username: 'user1'
}

//
const token = jwt.sign(tokenData,'jwt@123')
console.log(token)