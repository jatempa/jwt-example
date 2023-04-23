const { createJWT, hashPassword } = require('../modules/auth');
const { v4 } = require('uuid');

const createNewUser = async (req, res, next) => {
  try {
    const user = {
      id: v4(),
      username: req.body.username,
      password: await hashPassword(req.body.password),
    };

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createNewUser,
};
