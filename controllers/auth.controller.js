const User = require('../model/user.model');

login = (req, res) => {
    res.render('login')
};
  
signup = (req, res) => {
    res.render('signup')
};
  
postCreateSignup = (req, res) => {
    var newUser = new User({
      email: req.body.email,
      password: req.body.password,
      fullname: req.body.fname,
      phone: req.body.number
    
    });
    User.createUser(newUser);
    res.redirect('/user');
};

module.exports = {
    login,
    signup,
    postCreateSignup
};
