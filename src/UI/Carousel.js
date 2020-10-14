import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'

const CarouselComponent = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselImg = [
  'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg',
  'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_es_US_1x._CB431860453_.jpg',
  'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_es_US_1x._CB418867793_.jpg',
  'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v1_es_US_2x._CB428993288_.jpg'
  ];

  return (
    <div>

      <Carousel  activeIndex={index}  onSelect={handleSelect}>
      {
        carouselImg.map(img => (
        <Carousel.Item interval={1000}>
           <img
            className="d-block w-100"
            src={img}
            alt="First slide"
          />

        </Carousel.Item>
        ))
      }
    </Carousel>



  </div>

  );

};


export default CarouselComponent;
