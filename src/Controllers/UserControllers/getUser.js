const { User } = require("../../db.js");

const getUser = async (req, res, next) => {

    let { filter, value } = req.query

    console.log(req.query);
    let respuesta = null

    if(filter){
        User.findOne( {where: { [filter]: value } } ).then( (user) => {
        respuesta = user
        console.log(user);
        res.send(user)
    })
    .catch(error => {
      console.log(error);
      res.send(error)
    })
  }
  else{
    User.findAll().then(users => {
      console.log(users);
      res.send(users)
    })
  }

 
};

module.exports = getUser;
