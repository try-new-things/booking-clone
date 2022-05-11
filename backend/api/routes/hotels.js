import express from 'express';
import { getAllHotel, getHotel, createHotel, updateHotel, deleteHotel } from '../controllers/hotelController';

const router = express.Router();

router.route('/').get(getAllHotel).post(createHotel);
router.route('/:id').get(getHotel).patch(updateHotel).delete(deleteHotel);

export default router;
