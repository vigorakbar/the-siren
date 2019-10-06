import Latest1 from 'assets/images/latest1.png';
import Latest2 from 'assets/images/latest2.png';
import Latest3 from 'assets/images/latest3.png';

const latestData = [
  {
    id: '1',
    title: 'Joshua Tree Overnight Adventure',
    content:
      'Focusing on the latest investigations, we can positively say that any comprehensive methods enforces the overall effect of The Implementation of Elaborate Availability.',
    image: Latest1,
    category: 'travel',
    releaseDate: '2017-07-21',
  },
  {
    id: '2',
    title: 'Stretch it out at sunset on Baker Beach',
    content:
      'Gather at Baker Beach before class to meet the founder of Outdoor Yoga SF, learn about the history of Baker Beach and why its important to Outdoor Yoga SF.',
    image: Latest2,
    category: 'travel',
    releaseDate: '2017-07-21',
  },
  {
    id: '3',
    title: 'Fragile Future, Private Commission Paris',
    content:
      'Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu',
    image: Latest3,
    category: 'design',
    releaseDate: '2017-07-21',
  },
];

// mock request
export const getLatestData = () =>
  new Promise(resolve => {
    resolve({
      data: latestData,
    });
  });
