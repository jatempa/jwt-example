import prisma from '../db';
import { comparePasswords, createJWT, hashPassword } from '../modules/auth';
import { NextFunction, Request, Response } from 'express';

const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    next(e);
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    const isValid = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
      res.status(401);
      res.json({ message: 'nope' });
      return;
    }

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    console.error(e);
    res.status(401);
    res.json({ message: 'not valid user' });
    return;
  }
};

export { createNewUser, signIn };
