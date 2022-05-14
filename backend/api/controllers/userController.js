import User from '../models/UserSchema';
import { asyncWrapper } from '../middleware/async';
import { createErrorHandler } from '../error/error-handler';

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
  getUsers,
  getUser,
  updateUser,
  deleteUser
}