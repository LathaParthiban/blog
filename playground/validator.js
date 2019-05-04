// import validator from 'validator';  //ES6 type of requiring a package
const validator = require('validator')
const email = 'lathu@gmail,com'
console.log(validator.isEmail(email))