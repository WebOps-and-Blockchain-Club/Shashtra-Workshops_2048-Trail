const User = require("../Model/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  await User.create({
    username: req.body.username,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: bcryptjs.hashSync(
      req.body.password,
      parseInt(process.env.ITERATIONS)
    ),
  })
    .then((userCreated) => {
      return res.status(200).send({
        message: "User Registered Successfully!",
        user: userCreated,
      });
    })
    .catch((e) => {
      return res.status(500).send({
        message: "Error in Saving User: " + e,
        user: null,
      });
    });
};

module.exports.signin = async (req, res) => {
  await User.findOne({ email: req.body.email })
    .then((user) => {
      console.log(user);
      var passwordIsValid = bcryptjs.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) return res.status(401).send("Invalid Credentials");
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
      return res.status(200).send({
        loginStatus: true,
        error: null,
        id: user._id,
        jwtToken: token,
      });
    })
    .catch((e) =>
      res.status(500).send({
        loginStatus: false,
        error: e.message,
        id: null,
        jwtToken: null,
      })
    );
};

module.exports.content = async (req, res) => {
  await User.findOne({ _id: req.decodedId })
    .then((user) => {
      return res.status(200).send({
        message: "User is Authorised!",
        userDetails: user,
        content: "User content",
      });
    })
    .catch((e) => {
      return res.status(401).send({
        message: "Unauthorized!" + e,
        decodedId: null,
      });
    });
};
