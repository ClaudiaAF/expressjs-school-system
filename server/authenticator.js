const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
  

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) 

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, teacher1) => {
    console.log(err)
    if (err) return res.sendStatus(403)

    req.teacher1 = teacher1
    console.log("This is the request teacher1", req.teacher1)
    next()
  })

}