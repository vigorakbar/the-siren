import React from 'react';
import { withStyles } from '@material-ui/core';
import cx from 'classnames';
import InnerContainer from 'components/containers/InnerContainer';
import Carousel2 from 'assets/images/carousel2.png';
import AsideCarousel1 from 'assets/images/asideCarousel1.png';
import AsideCarousel2 from 'assets/images/asideCarousel2.png';

const styles = theme => ({
  main: {
    padding: '4vw',
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
  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    [`@media (max-width:${theme.breakpoints.width('md')}px)`]: {
      display: 'none',
    },
  },
  asideCarouselImage: {
    flexGrow: 1,
    marginLeft: '1vw',
    '&:first-child': {
      marginBottom: '0.5vw',
    }
  }
});
const Main = ({ classes }) => (
  <main className={classes.main}>
    <InnerContainer>
      <div className={classes.imageContainer}>
        <div
          className={cx(classes.image, classes.carousel)}
          style={{ backgroundImage: `url(${Carousel2})` }}
        />
        <div className={classes.asideCarouselContainer}>
          <div
            className={cx(classes.image, classes.asideCarouselImage)}
            style={{ backgroundImage: `url(${AsideCarousel1})` }}
          />
          <div
            className={cx(classes.image, classes.asideCarouselImage)}
            style={{ backgroundImage: `url(${AsideCarousel2})` }}
          />
        </div>
      </div>
    </InnerContainer>
  </main>
);

export default withStyles(styles)(Main);
