import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import { getAsideCarouselData } from 'helpers/requests';
import Overlay from 'components/Carousel/Overlay';

const styles = () => ({
  asideCarouselContainer: {
    height: '100%',
    flexGrow: 0.9,
    display: 'flex',
    flexDirection: 'column',
  },
  asideCarouselImage: {
    flexGrow: 1,
    marginLeft: '1vw',
    '&:first-child': {
      marginBottom: '0.5vw',
    },
    position: 'relative',
  },
  displayNone: {
    display: 'none',
  },
});

const AsideCarousel = ({ classes, hideContent }) => {
  const [asideCarouselData, setAsideCarouselData] = useState([]);

  useEffect(() => {
    getAsideCarouselData()
      .then(res => {
        setAsideCarouselData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div
      className={cx(
        classes.asideCarouselContainer,
        hideContent && classes.displayNone
      )}
    >
      {asideCarouselData.map((asideData, i) => (
        <div
          key={asideData.id}
          className={classes.asideCarouselImage}
          style={{
            backgroundImage: `url(${asideData.image})`,
            backgroundPosition: 'center',
          }}
          aria-label={`side carousel ${i + 1}`}
        >
          <Overlay data={asideData} size="small" />
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(AsideCarousel);
