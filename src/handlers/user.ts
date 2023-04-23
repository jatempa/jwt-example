import { createJWT, hashPassword } from '../modules/auth';
import { v4 } from 'uuid';

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

export default createNewUser;
