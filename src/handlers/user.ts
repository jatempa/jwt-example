import { createJWT, hashPassword } from '../modules/auth';
import prisma from '../db';
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

export default createNewUser;
