import React from 'react';
import { withStyles, Fade } from '@material-ui/core';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Dot from './Dot';
import { useCarouselIndex } from 'helpers/hooks';

const styles = () => ({
  root: {
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    backgroundSize: 'cover',
  },
  overlay: {
    zIndex: 15,
  },
  imageFront: {
    zIndex: 10,
  },
  imageMiddle: {
    zIndex: 5,
  },
  imageBack: {
    zIndex: 0,
  },
  dot: {
    marginTop: '10px',
  },
  dotsContainer: {
    position: 'absolute',
    right: '4.79%',
    bottom: '13.56%',
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
});

const Carousel = ({
  className,
  classes,
  images,
  overlay,
  interval = 5300,
  exitTime = 500,
  enterTime = 500,
  backgroundPosition = 'default',
}) => {
  // set interval for slide event
  const [activeIndex, setActiveIndex, prevActiveIndex] = useCarouselIndex({
    totalImage: images.length,
    interval,
  });

  const renderDots = () => (
    <div>
      {images.map((image, i) => (
        <Dot
          key={i}
          isActive={activeIndex === i}
          onClick={() => {
            setActiveIndex(i);
          }}
          className={classes.dot}
        />
      ))}
    </div>
  );

  return (
    <div className={cx(className, classes.root, classes.fullSize)}>
      {images.map((image, i) => {
        const isActive = activeIndex === i;
        const isPrevActive = prevActiveIndex === i;
        return (
          <React.Fragment key={i}>
            <Fade
              key={i}
              in={isActive}
              timeout={{ enter: enterTime, exit: exitTime }}
              appear={false}
            >
              <div
                className={cx(
                  classes.image,
                  classes.fullSize,
                  isActive && classes.imageFront,
                  !isActive && classes.imageBack
                )}
                style={{ backgroundImage: `url(${image})`, backgroundPosition }}
                role="img"
                aria-label={`carousel image ${i + 1}`}
              >
                {overlay}
              </div>
            </Fade>
            <div
              className={cx(
                classes.image,
                classes.fullSize,
                isPrevActive ? classes.imageMiddle : classes.imageBack
              )}
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className={cx(classes.dotsContainer, classes.overlay)}>
              {renderDots()}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  overlay: PropTypes.node,
  interval: PropTypes.number,
  exitTime: PropTypes.number,
  enterTime: PropTypes.number,
};

export default withStyles(styles)(Carousel);
