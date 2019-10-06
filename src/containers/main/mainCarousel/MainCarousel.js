import React from 'react';
import { withStyles, Fade } from '@material-ui/core';
import InnerContainer from 'components/containers/InnerContainer';
import { useDetectTransition } from 'helpers/hooks';
import CarouselContent from './CarouselContent';
import AsideCarousel from './AsideCarousel';
import OuterContainer from 'components/containers/OuterContainer';

const styles = theme => ({
  imageContainer: {
    display: 'flex',
    maxHeight: '590px',
    minHeight: '200px',
    height: '80vh',
    [`@media (max-width:${theme.breakpoints.width('sm')}px)`]: {
      height: '30vh',
    },
  },
});

const MainCarousel = ({ classes, className }) => {
  const { transitionIn, hideContent } = useDetectTransition('md');

  return (
    <OuterContainer tag="section">
      <InnerContainer className={className}>
        <div className={classes.imageContainer}>
          <CarouselContent hideContent={hideContent} />
          <Fade in={transitionIn}>
            <AsideCarousel hideContent={hideContent} />
          </Fade>
        </div>
      </InnerContainer>
    </OuterContainer>
  );
};

export default withStyles(styles)(MainCarousel);
