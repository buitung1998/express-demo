var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


var userSchema = new mongoose.Schema({
    email:{type: String, required: true, trim: true },
    password: String,
    fullname: String,
    phone: String,
    created_at: {type: Date, default: Date.now }
    }, {collection: 'user'});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;

module.exports.createUser = (newUser)=>{
    var saltRounds = 10;
    const {password} = newUser
    console.log('pass:', password);
    
    bcrypt.hash(password, saltRounds, function(err, hash) {
        newUser.password = hash;
        newUser.save()
      });
}