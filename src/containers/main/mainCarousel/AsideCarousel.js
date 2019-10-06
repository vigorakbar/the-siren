import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import { getAsideCarouselData } from 'helpers/requests';

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
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(AsideCarousel);
