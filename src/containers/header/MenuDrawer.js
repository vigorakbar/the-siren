import React from 'react';
import { withStyles, Drawer } from '@material-ui/core';
import { menus } from './Header';
import Navbar from 'components/NavBar/Navbar';

const styles = () => ({
  listItemText: {
    fontSize: '1.6rem',
  },
  listItem: {
    paddingLeft: '30px',
  },
  navbar: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '30rem',
    margin: '2rem 1rem 0 2rem',
  },
});

const MenuDrawer = ({ classes, open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <Navbar className={classes.navbar} menus={menus} />
    </Drawer>
  );
};

export default withStyles(styles)(MenuDrawer);
