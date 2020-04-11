const mongoose = require('mongoose')

module.exports = () => {

    mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log('Mongodb connected sucessfully') })
        .catch((e) => { console.log('error occured ' + e.message) })
}