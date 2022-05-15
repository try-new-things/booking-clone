import Room from '../models/RoomSchema';
import Hotel from '../models/HotelSchema';
import { asyncWrapper } from '../middleware/async';
import { createErrorHandler } from '../error/error-handler';

const getRooms = asyncWrapper(async (req, res, next) => {
  const rooms = await Room.find();
  res.status(200).json({ rooms });
});

const getRoom = asyncWrapper(async (req, res, next) => {
  const { id: roomID } = req.params;
  const room = await Room.findOne({ _id: roomID });

  if (!room) {
    return next(createErrorHandler(`No room with id : ${hotelID}`, 404));
  }

  res.status(200).json({ room });
});

const createRoom = asyncWrapper(async (req, res, next) => {
  const hodelID = req.params.hotelid;
  const newRoom = new Room(req.body);

  const saveRoom = await newRoom.save();

  await Hotel.findByIdAndUpdate(hodelID, {
    $push: { rooms: saveRoom._id },
  });

  res.status(200).json({ saveRoom });
});

const updateRoom = asyncWrapper(async (req, res, next) => {
  const { id: roomID } = req.params;
  const room = await Room.findOneAndUpdate({ _id: roomID }, req.body, { new: true });

  if (!room) {
    return next(createErrorHandler(`No room with id : ${hotelID}`, 404));
  }

  res.status(200).json({ room });
});

const deleteRoom = asyncWrapper(async (req, res, next) => {
  const { id: roomID, hotelid: hotelID } = req.params;
  const room = await Room.findOneAndDelete({ _id: roomID });

  if (!room) {
    return next(createErrorHandler(`No room with id : ${hotelID}`, 404));
  }

  await Hotel.findOneAndUpdate({ _id: hotelID }, { $pull: { rooms: roomID } });

  res.status(200).json({ room });
});

export {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
}