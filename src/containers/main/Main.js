import React from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import MainCarousel from './mainCarousel/MainCarousel';
import LatestSection from './latestSection/LatestSection';

const styles = ({ breakpoints }) => ({
  sectionMargin1: {
    marginBottom: '4.9vw',
    [breakpoints.up('xl')]: {
      marginBottom: '95px',
    },
  },
});

const Main = ({ classes, className }) => {
  return (
    <main className={cx(className)}>
      <MainCarousel className={classes.sectionMargin1} />
      <LatestSection />
    </main>
  );
};

export default withStyles(styles)(Main);
