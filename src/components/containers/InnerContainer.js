import React from 'react';
import { withStyles } from '@material-ui/core';
import cx from 'classnames';

const styles = theme => {
  console.log(theme);
  return {
    root: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
    },
  };
};

const InnerContainer = ({ children, classes, className, tag = 'div' }) => {
  const Tag = tag
  return <Tag className={cx(className, classes.root)}>{children}</Tag>;
};

export default withStyles(styles)(InnerContainer);
