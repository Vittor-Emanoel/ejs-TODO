const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.set('strictQuery', true)
mongoose.connect(
  'mongodb+srv://to-do-list:300321Vb@banco01.cd03pgl.mongodb.net/?retryWrites=true&w=majority'
)

const db = mongoose.connection

module.exports = db
