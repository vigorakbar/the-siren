import React from 'react';
import { withStyles } from '@material-ui/core';
import cx from 'classnames';

const styles = (theme) => {
  console.log(theme)
  return {
  root: {
    width: '100%',
    maxWidth: '1400px'
  }
};
}

const InnerContainer = ({ children, classes, className }) => (
  <div className={cx(className, classes.root)}>{children}</div>
);

export default withStyles(styles)(InnerContainer);
