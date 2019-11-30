import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import Carousel from 'components/Carousel/Carousel';
import Overlay from 'components/Carousel/Overlay';
import { getCarouselData } from 'helpers/requests';

const styles = ({ breakpoints, palette }) => ({
  carousel: {
    flexGrow: 2.1,
    maxWidth: '940px',
    height: '100%',
  },
});

const CarouselContent = ({ classes, hideContent }) => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    getCarouselData()
      .then(res => {
        setCarouselData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={classes.carousel}>
      <Carousel
        data={carouselData}
        backgroundPosition={hideContent ? 'center' : 'default'}
        overlay={index => <Overlay index={index} data={carouselData[index]} underlineText/>}
      />
    </div>
  );
};

export default withStyles(styles)(CarouselContent);
