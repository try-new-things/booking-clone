import User from '../models/UserSchema';
import { asyncWrapper } from '../middleware/async';
import { createErrorHandler } from '../error/error-handler';
import bcrypt from 'bcryptjs';

const register = asyncWrapper(async (req, res) => {

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash,
  });

  await newUser.save();
  res.status(200).json({ user });
});

export {
  register,
}