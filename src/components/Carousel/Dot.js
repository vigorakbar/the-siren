import React from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  root: {
    backgroundColor: 'transparent',
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    outline: 'none',
  },
});

const Dot = ({ className, classes, isActive, onClick, color = 'white' }) => (
  <button
    className={cx(className, classes.root, isActive && classes.filled)}
    style={{
      border: `1px solid ${color}`,
      backgroundColor: isActive ? color : 'transparent',
    }}
    onClick={onClick}
  />
);

export default withStyles(styles)(Dot);
