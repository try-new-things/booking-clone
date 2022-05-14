import express from 'express';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userController';
import { verifyUser, verifyAdmin } from '../utils/verifyToken';

const router = express.Router();

router.route('/').get(verifyAdmin, getUsers);
router.route('/:id').get(verifyUser, getUser).put(verifyUser, updateUser).delete(verifyUser, deleteUser);

export default router;
