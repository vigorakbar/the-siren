import React from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = ({ palette }) => ({
  root: {
    backgroundColor: palette.common.orange,
  }
});

const HighlightLine = ({
  className,
  classes,
  width = '100%',
  height = '2px',
}) => <div className={cx(className, classes.root)} style={{ width, height }} />;

export default withStyles(styles)(HighlightLine);
