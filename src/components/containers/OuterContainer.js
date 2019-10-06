import React from 'react';
import { withStyles } from '@material-ui/core';
import cx from 'classnames';

const styles = () => {
  return {
    root: {
      padding: '0 4vw',
    },
  };
};

const OuterContainer = ({ children, classes, className, tag = 'div' }) => {
  const Tag = tag;
  return <Tag className={cx(className, classes.root)}>{children}</Tag>;
};

export default withStyles(styles)(OuterContainer);
