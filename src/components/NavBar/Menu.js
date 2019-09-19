import React from 'react';
import { withStyles, ButtonBase } from '@material-ui/core';
import cx from 'classnames';

const styles = ({ palette }) => ({
  anchor: {
    textDecoration: 'none',
    margin: '0 6px',
  },
  button: {
    color: palette.text.primary,
    fontSize: '1.8rem',
    transition: 'color 0.2s',
    '&:hover': {
      color: palette.text.highlight,
    },
    padding: '4px',
    borderRadius: '5px'
  },
  active: {
    color: palette.text.highlight,
  },
});

const Menu = ({ classes, className, label, link, active, onClick }) => (
  <a
    className={classes.anchor}
    onClick={onClick}
    href={link}
  >
    <ButtonBase className={cx(className, classes.button, active && classes.active)}>
      {label}
    </ButtonBase>
  </a>
);

export default withStyles(styles)(Menu);
