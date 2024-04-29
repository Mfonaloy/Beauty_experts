const jwt = require('jsonwebtoken')

const verifyAuth = (req, res, next)=> {
     const bearer = req.headers["authorization"]

     if(typeof bearer == "undefined"){
          res.status(403).json({message: "unauthorized user"})
     } else {
          try {
               const fullbearer = bearer.split(' ');
               req.webToken = fullbearer[1];
               req.decoded = jwt.verify(fullbearer[1],"tech4dev")
               console.log(req.decoded);
          }
          catch (err) {
               res.status(403).json({message: "inalid token"})
          }
     }
     console.log(bearer);
     next();
}

module.exports = {verifyAuth}