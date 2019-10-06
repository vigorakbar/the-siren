import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import HighlightLine from 'components/lines/HighlightLine/HighlightLine';

const styles = ({ breakpoints }) => ({
  root: {
    position: 'relative',
  },
  title: {
    fontSize: '2.6rem',
    paddingBottom: '1.1vw',
    [breakpoints.up('sm')]: {
      fontSize: '3.6rem',
    },
    [breakpoints.up('xl')]: {
      paddingBottom: '21px',
    },
  },
  line: {
    position: 'absolute',
    bottom: '-2px',
  },
});

const SectionTitle = ({ className, classes, title }) => {
  return (
    <div className={classes.root}>
      <Typography className={`${className} ${classes.title}`} component="h2">
        {title}
      </Typography>
      <HighlightLine width="80px" className={classes.line} />
    </div>
  );
};

export default withStyles(styles)(SectionTitle);
