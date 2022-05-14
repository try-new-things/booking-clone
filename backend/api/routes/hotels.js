import express from 'express';
import { getAllHotel, getHotel, createHotel, updateHotel, deleteHotel } from '../controllers/hotelController';
import { verifyAdmin } from '../utils/verifyToken';

const router = express.Router();

router.route('/').get(getAllHotel).post(verifyAdmin, createHotel);
router.route('/:id').get(getHotel).put(verifyAdmin, updateHotel).delete(verifyAdmin, deleteHotel);

export default router;
