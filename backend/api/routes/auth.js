import express from 'express';
import { register, login, getUsers, getUser, updateUser, deleteUser } from '../controllers/authController';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", getUsers);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;