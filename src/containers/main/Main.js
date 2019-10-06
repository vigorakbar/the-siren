import React from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import MainCarousel from './mainCarousel/MainCarousel';
import LatestSection from './latestSection/LatestSection';

const styles = theme => ({
  main: {
    marginBottom: '95px',
  },
});

const Main = ({ classes, className }) => {
  return (
    <main className={cx(className, classes.main)}>
      <MainCarousel />
      <LatestSection />
    </main>
  );
};

export default withStyles(styles)(Main);
