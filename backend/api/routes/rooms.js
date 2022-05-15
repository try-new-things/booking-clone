import express from 'express';
import { verifyAdmin } from '../utils/verifyToken';
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from '../controllers/roomController';

const router = express.Router();

router.route('/').get(getRooms);
router.route('/:hotelid').post(verifyAdmin, createRoom);
router.route('/:id').get(getRoom).put(verifyAdmin, updateRoom);
router.route('/:id/:hotelid').delete(verifyAdmin, deleteRoom);

export default router;