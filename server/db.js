const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://vinodisaumya:1234@cluster0.ojmuwvk.mongodb.net/mern-room';


mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log(`Mongodb Connection Success!`);
})

db.on('error', () => {
    console.log(`Mongodb Connection failed!`);
})

module.exports = mongoose;
