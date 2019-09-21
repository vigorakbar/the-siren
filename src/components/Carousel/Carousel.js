import React, { useState, useEffect, useCallback, useRef } from 'react';
import { withStyles, Slide } from '@material-ui/core';
import cx from 'classnames';
import PropTypes from 'prop-types';
// import { usePrevious } from 'methods';
import Dot from './Dot';

const styles = () => ({
  root: {
    overflow: 'hidden',
  },
  image: {
    position: 'relative',
    backgroundSize: 'cover',
  },
  dotsContainer: {
    display: 'absolute',
    right: '4.79%',
    bottom: '13.56%',
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
});

let timer;
const RESET_TIMER = 'RESET_TIMER';

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Carousel = ({ className, classes, images, overlay, interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('up');
  const prevActiveIndex = usePrevious(activeIndex);
  // carousel slide timer
  const timerEffect = useCallback(
    type => {
      if (type === RESET_TIMER) clearInterval(timer);
      timer = setInterval(() => {
        setActiveIndex(index => (index === images.length - 1 ? 0 : index + 1));
      }, interval);

      return () => {
        clearInterval(timer);
      };
    },
    [images.length, interval]
  );

  // start timer
  useEffect(() => timerEffect(), [timerEffect]);
  // update timer
  useEffect(() => {
    timerEffect(RESET_TIMER);
    setSlideDirection(prevActiveIndex < activeIndex ? 'down' : 'up');
  }, [activeIndex, prevActiveIndex, timerEffect]);

  const renderDots = () => (
    <div>
      {images.map((image, i) => (
        <Dot
          isActive={activeIndex === i}
          onClick={() => {
            setActiveIndex(i);
          }}
        />
      ))}
    </div>
  );

  return (
    <div className={cx(className, classes.root, classes.fullSize)}>
      {images.map((image, i) => (
        <Slide in={activeIndex === i} direction={slideDirection}>
          <div
            className={cx(classes.image, classes.fullSize)}
            style={{ backgroundImage: `url(${image})` }}
          >
            {overlay}
            <div className={classes.dotsContainer}>{renderDots}</div>
          </div>
        </Slide>
      ))}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  overlay: PropTypes.node,
  interval: PropTypes.number,
};

export default withStyles(styles)(Carousel);
