//Authenticate users

const jwt = require("jsonwebtoken");

const getToken = (user) => {
  return jwt.sign(
    {
      name: user.name,
      password: user.password,
    },
    config.JWT_SECRET,
    {
      expiresIn: '48h',
    }
  );
};