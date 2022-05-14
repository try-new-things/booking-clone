import Room from '../models/RoomSchema';
import Hotel from '../models/HotelSchema';
import { asyncWrapper } from '../middleware/async';
import { createErrorHandler } from '../error/error-handler';

const createRoom = asyncWrapper(async (req, res, next) => {
  const hodelID = req.params.hotelid;
  const newRoom = new Room(req.body);

  const saveRoom = await newRoom.save();

  await Hotel.findByIdAndUpdate(hodelID, {
    $push: { rooms: saveRoom._id },
  });

  res.status(200).json({ saveRoom });
});