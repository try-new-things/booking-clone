import Hotel from '../models/HotelSchema';
import { asyncWrapper } from '../middleware/async';
import { createErrorHandler } from '../error/error-handler';

const getAllHotel = asyncWrapper(async (req, res) => {
  const hotels = await Hotel.find();
  res.status(200).json({ hotels });
});

const getHotel = asyncWrapper(async (req, res, next) => {
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

const countByCity = asyncWrapper(async (req, res, next) => {
  const cities = req.query.cities.splite(",");
  const list = await Promise.all(cities.map(city => {
    return Hotel.countDocuments({ city: city });
  }));
  res.status(200).json({ list });
});

const countByType = asyncWrapper(async (req, res, next) => {
  const hotelCount = await Hotel.countDocuments({ type: "hotel" });
  const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
  const resortCount = await Hotel.countDocuments({ type: "resort" });
  const villaCount = await Hotel.countDocuments({ type: "villa" });
  const cabinCount = await Hotel.countDocuments({ type: "cabin" });

  res.status(200).json([
    { type: "hotel", count: hotelCount },
    { type: "apartment", count: apartmentCount },
    { type: "resort", count: resortCount },
    { type: "villa", count: villaCount },
    { type: "cabin", count: cabinCount }
  ]);
});

export {
  getAllHotel,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel,
  countByCity,
  countByType,
}