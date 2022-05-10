import express from 'express';
import { createHotel } from '../controllers/hotelController';

const router = express.Router();

router.route('/').post(createHotel);


export default router;
