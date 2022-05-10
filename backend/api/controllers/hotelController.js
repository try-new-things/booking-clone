import Hotel from '../models/HotelSchema';

const createHotel = async (req, res) => {
  const newHotel = await Hotel.create(req.body);

};

export {
  createHotel,
}