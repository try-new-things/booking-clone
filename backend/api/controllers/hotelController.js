import Hotel from '../models/HotelSchema';
import { asyncWrapper } from '../middleware/async';
import { createErrorHandler } from '../error/error-handler';

const getAllHotel = asyncWrapper(async (req, res) => {
  const hotels = await Hotel.find();
  res.status(200).json({ hotels });
});

const getHotel = asyncWrapper(async (req, res) => {
  const { id : hotelID } = req.params;
  const hotel = await Hotel.findOne({ _id: hotelID });

  if (!hotel) {
    return next(createErrorHandler(`No hotel with id : ${hotelID}`, 404));
  }

  res.status(200).json({ hotel });
});

const createHotel = asyncWrapper(async (req, res) => {
  const hotel = await Hotel.create(req.body);
  res.status(201).json({ hotel });
});

const updateHotel = asyncWrapper(async (req, res, next) => {
  const { id : hotelID } = req.params;
  const hotel = await Hotel.findOneAndUpdate({ _id: hotelID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!hotel) {
    return next(createErrorHandler(`No hotel with id : ${hotelID}`, 404));
  }

  res.status(200).json({ hotel });
});

const deleteHotel = asyncWrapper(async (req, res) => {
  const { id : hotelID } = req.params;
  const hotel = await Hotel.findOneAndDelete({ _id: hotelID });

  if (!hotel) {
    return next(createErrorHandler(`No hotel with id : ${hotelID}`, 404));
  }

  res.status(201).json({ hotel });
});

export {
  getAllHotel,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel,
}