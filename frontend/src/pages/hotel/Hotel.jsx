import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/163919339.jpg?k=e64006397e1c2b489c3c6c42ebda3503c5958842abbfe251455aa77f4165efc6&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/163919341.jpg?k=21065ad782b3530c49d971dea2cbd87444b340d9d72e61ed051cd8bc55ffe0c7&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163919336.jpg?k=9961cc56c7a937eacc488fffd32d9ba2365870dbbd16eeb2f2ce79dd7128aa4a&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/165151042.jpg?k=5a9fdf8f28e9472a87cba9ddc7bfddd3f5d56887723c66f4950aec0887a90f01&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/164385250.jpg?k=1db94ffa0fe7243c5c697abc8eb62e6630d4adc5dc29bfcc51b239053da11869&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/164385318.jpg?k=612fb31b5c9a92616483d643da5ea649e7a15c64cb3ff18b695ee3be9d3438e9&o=&hp=1"
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 Newyork</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.
                The units come with hardwood floors and feature a fully equiped kitchenette with a microwave, a flate-screen TV, 
                and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine.
                Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is 
                John Pall II International Krakow-Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an 
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 night)
              </h2>
              <button>Reserve of Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel;