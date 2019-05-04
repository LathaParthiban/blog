const mongoose = require('mongoose')


console.log(mongoose.Promise)
console.log(global.Promise)

mongoose.Promise = global.Promise
console.log(mongoose.Promise)