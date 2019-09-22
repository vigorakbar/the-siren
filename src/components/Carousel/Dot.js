import React from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import { ReactComponent as Oval } from 'assets/svg/oval.svg';

const styles = () => ({
  root: {
    height: '11px',
    width: '11px',
    cursor: 'pointer',
    // '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
  },
  oval: {
    '& path': {
      fill: 'rgba(255,255,255,0)',
      transition: 'fill 500ms',
    },
  },
  ovalActive: {
    '& path': {
      fill: 'rgba(255,255,255,1)',
    },
  }
});

const Dot = ({
  className,
  ovalClasses,
  classes,
  isActive,
  onClick,
  color = '#FFFFFF',
}) => (
  <div className={cx(className, classes.root)} onClick={onClick} role="button">
    <Oval className={cx(classes.oval, isActive && classes.ovalActive)} stroke={color} />
  </div>
);

export default withStyles(styles)(Dot);
