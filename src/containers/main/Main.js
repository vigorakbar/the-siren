import React, { useState, useEffect } from 'react';
import { withStyles, Fade } from '@material-ui/core';
import cx from 'classnames';
import InnerContainer from 'components/containers/InnerContainer';
import Carousel from 'components/Carousel/Carousel';
import { getCarouselImages, getAsideCarouselImages } from 'helpers/requests';
import { useDetectTransition } from 'helpers/hooks';

const styles = theme => ({
  main: {
    padding: '0 4vw',
    marginBottom: '95px',
  },
  imageContainer: {
    display: 'flex',
    maxHeight: '590px',
    minHeight: '200px',
    height: '80vh',
    [`@media (max-width:${theme.breakpoints.width('sm')}px)`]: {
      height: '30vh',
    },
  },
  carousel: {
    flexGrow: 2.1,
    maxWidth: '940px',
    height: '100%',
  },
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
  }
});
const Main = ({ classes, className }) => {
  const [carouselImageList, setCarouselImageList] = useState([]);
  const [asideCarouselImageList, setAsideCarouselImageList] = useState([]);
  const { transitionIn, hideContent } = useDetectTransition('md');

  useEffect(() => {
    getCarouselImages()
      .then(res => {
        setCarouselImageList(res.data);
      })
      .catch(err => console.log(err));

    getAsideCarouselImages()
      .then(res => {
        setAsideCarouselImageList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className={cx(className, classes.main)}>
      <InnerContainer>
        <div className={classes.imageContainer}>
          <div className={classes.carousel}>
            <Carousel images={carouselImageList} backgroundPosition={hideContent ? 'center' : 'default'} />
          </div>
          <Fade in={transitionIn}>
            <div className={cx(classes.asideCarouselContainer, hideContent && classes.displayNone)}>
              {asideCarouselImageList.map((asideImage, i) => (
                <div
                  key={asideImage}
                  className={cx(classes.image, classes.asideCarouselImage)}
                  style={{ backgroundImage: `url(${asideImage})`, backgroundPosition: 'center' }}
                  aria-label={`side carousel ${i + 1}`}
                />
              ))}
            </div>
          </Fade>
        </div>
      </InnerContainer>
    </main>
  );
};

export default withStyles(styles)(Main);
