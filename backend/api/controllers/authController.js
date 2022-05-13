import User from '../models/UserSchema';
import { asyncWrapper } from '../middleware/async';
import { createErrorHandler } from '../error/error-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = asyncWrapper(async (req, res, next) => {

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash,
  });

  await newUser.save();
  res.status(200).json({ newUser });
});

const login = asyncWrapper(async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return next(createErrorHandler('User not found', 404));
  }

  const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
  if (!isPasswordCorrect) {
    return next(createErrorHandler('Wrong username or password', 400));
  }

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

  const { password, isAdmin, ...otherDetails } = user._doc;
  res.cookie("access_token", token, { httpOnly: true,  }).status(200).json({ otherDetails });
});

const getUsers = asyncWrapper(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ users });
});

const getUser = asyncWrapper(async (req, res, next) => {
  const { id : userID } = req.params;
  const user = await User.findOne({ _id: userID });

  if (!user) {
    return next(createErrorHandler(`No User with id : ${userID}`, 404));
  }

  res.status(200).json({ user });
});

const updateUser = asyncWrapper(async (req, res, next) => {
  const { id : userID } = req.params;
  const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(createErrorHandler(`No user with id : ${userID}`, 404));
  }

  res.status(200).json({ hotel });
});

const deleteUser = asyncWrapper(async (req, res) => {
  const { id : userID } = req.params;
  const user = await User.findOneAndDelete({ _id: userID });

  if (!user) {
    return next(createErrorHandler(`No user with id : ${userID}`, 404));
  }

  res.status(201).json({ user });
});

export {
  register,
  login,
  getUsers,
  getUser,
  updateUser,
  deleteUser
}