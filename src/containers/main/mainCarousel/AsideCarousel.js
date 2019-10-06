import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import { getAsideCarouselImages } from 'helpers/requests';

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
  },
  displayNone: {
    display: 'none',
  },
});

const AsideCarousel = ({ classes, hideContent }) => {
  const [asideCarouselImageList, setAsideCarouselImageList] = useState([]);

  useEffect(() => {
    getAsideCarouselImages()
      .then(res => {
        setAsideCarouselImageList(res.data);
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
      {asideCarouselImageList.map((asideImage, i) => (
        <div
          key={asideImage}
          className={classes.asideCarouselImage}
          style={{
            backgroundImage: `url(${asideImage})`,
            backgroundPosition: 'center',
          }}
          aria-label={`side carousel ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(AsideCarousel);
