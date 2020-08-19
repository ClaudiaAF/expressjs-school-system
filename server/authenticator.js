const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
  
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)

    req.user = user
    console.log("This is the request user", req.user)
    next()
  })
}