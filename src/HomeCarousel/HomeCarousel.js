
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
    image: require('./images/kultamuki.png'),
  },
  {
    image: require('./images/puhdistusliina-mainos.png'),
  }
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <Carousel activeIndex={index} onSelect={handleSelect} className="karuselli">
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
            />
          </Carousel.Item>
        )
      })}
    </Carousel>

  );
}

export default HomeCarousel;