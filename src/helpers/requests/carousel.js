import Carousel1 from 'assets/images/carousel1.png';
import Carousel2 from 'assets/images/carousel2.png';
import Carousel3 from 'assets/images/carousel3.png';
import Carousel4 from 'assets/images/carousel4.png';

import AsideCarousel1 from 'assets/images/asideCarousel1.png';
import AsideCarousel2 from 'assets/images/asideCarousel2.png';

const carouselImageList = [Carousel1, Carousel2, Carousel3, Carousel4];
const asideCarouselImageList = [AsideCarousel1, AsideCarousel2];

// mock request
export const getCarouselImages = () => (
  new Promise((resolve) => {
    resolve({
      data: carouselImageList
    })
  })
);

export const getAsideCarouselImages = () => (
  new Promise((resolve) => {
    resolve({
      data: asideCarouselImageList
    })
  })
);
