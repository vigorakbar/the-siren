// Mock Request

import Carousel1 from 'assets/images/carousel1.png';
import Carousel2 from 'assets/images/carousel2.png';
import Carousel3 from 'assets/images/carousel3.png';
import Carousel4 from 'assets/images/carousel4.png';

import AsideCarousel1 from 'assets/images/asideCarousel1.png';
import AsideCarousel2 from 'assets/images/asideCarousel2.png';

const carouselData = [
  {
    id: '1',
    title: 'Sky, Mountains, and River – Unforgettable Experience',
    image: Carousel1,
    category: 'travel',
    releaseDate: 'August 21 2019',
  },
  {
    id: '2',
    title: 'Arizona Ultimate Adventure – Grand Canyon & Beyond',
    image: Carousel2,
    category: 'travel',
    releaseDate: 'August 21 2019',
  },
  {
    id: '3',
    title: 'Go See The World and Overcome Your Biggest Fear',
    image: Carousel3,
    category: 'travel',
    releaseDate: 'August 21 2019',
  },
  {
    id: '4',
    title: 'Deep Into The Jungle – A Challenging Adventure',
    image: Carousel4,
    category: 'travel',
    releaseDate: 'August 21 2019',
  },
];
const asideCarouselData = [
  {
    id: '1',
    title: 'The SoundCloud You Loved is Doomed',
    image: AsideCarousel1,
    category: 'music',
    releaseDate: 'August 21 2019',
  },
  {
    id: '2',
    title: 'OneWeb Vouches for High Reliability of Its Deorbit System',
    image: AsideCarousel2,
    category: 'travel',
    releaseDate: 'August 21 2019',
  },
];

export const getCarouselData = () =>
  new Promise(resolve => {
    resolve({
      data: carouselData,
    });
  });

export const getAsideCarouselData = () =>
  new Promise(resolve => {
    resolve({
      data: asideCarouselData,
    });
  });
