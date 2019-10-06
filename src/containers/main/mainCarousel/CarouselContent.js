import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import Carousel from 'components/Carousel/Carousel';
import { getCarouselImages } from 'helpers/requests';

const styles = () => ({
  carousel: {
    flexGrow: 2.1,
    maxWidth: '940px',
    height: '100%',
  },
});

const CarouselContent = ({ classes, hideContent }) => {
  const [carouselImageList, setCarouselImageList] = useState([]);

  useEffect(() => {
    getCarouselImages()
      .then(res => {
        setCarouselImageList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={classes.carousel}>
      <Carousel
        images={carouselImageList}
        backgroundPosition={hideContent ? 'center' : 'default'}
      />
    </div>
  );
};

export default withStyles(styles)(CarouselContent);
