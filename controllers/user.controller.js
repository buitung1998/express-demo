const User = require('../model/user.model');

index = async (req, res) => {
  var users = await User.find()
      res.render('user', {
        users
      })

};


module.exports = {
  index
};