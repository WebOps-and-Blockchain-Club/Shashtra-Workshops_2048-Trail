const jwt = require("jsonwebtoken");

module.exports.verify_jwt = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!" + err,
        decodedId: null,
      });
    }

    req.decodedId = decoded._id;
    return next();
  });
};
