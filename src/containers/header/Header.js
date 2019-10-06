import React, { useState } from 'react';
import cx from 'classnames';
import {
  withStyles,
  Fade,
  Collapse,
  Icon,
  IconButton,
  Divider,
} from '@material-ui/core';
import InnerContainer from 'components/containers/InnerContainer';
import logo from 'assets/logo.png';
import Navbar from 'components/NavBar/Navbar';
import MenuDrawer from './MenuDrawer';
import { useDetectTransition } from 'helpers/hooks';

const styles = ({ breakpoints }) => ({
  header: {
    display: 'flex',
    maxWidth: '1822px',
    margin: '0 auto',
    justifyContent: 'space-between',
    padding: '15px 20px 38px 20px',
    [breakpoints.up('lg')]: {
      padding: '30px 40px 38px 40px',
    },
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    marginTop: '28px',
    height: '10vw',
    maxHeight: '53px',
    minHeight: '32px',
  },
  navbar: {
    maxWidth: '65%',
    margin: '72px auto 32.5px auto',
  },
  asideHeader: {
    width: 40,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  hide: {
    display: 'none',
  },
  absolute: {
    position: 'absolute',
  },
  icon: {
    fontSize: '2.4rem',
  },
});

export const menus = [
  { label: 'Features', link: '#features' },
  { label: 'Fashion', link: '#fashion' },
  { label: 'Music', link: '#music' },
  { label: 'Design', link: '#design' },
  { label: 'Travel', link: '#travel' },
  { label: 'Style', link: '#style' },
  { label: 'People', link: '#people' },
];

const Header = ({ classes, className }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { transitionIn, hideContent } = useDetectTransition();

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <header className={cx(className, classes.header)}>
      <Fade in={transitionIn}>
        <div className={cx(classes.asideHeader, hideContent && classes.hide)}>
          icon
        </div>
      </Fade>
      <Fade in={!transitionIn}>
        <IconButton
          className={cx(classes.absolute, !hideContent && classes.hide)}
          onClick={openDrawer}
        >
          <Icon className={classes.icon}>menu</Icon>
        </IconButton>
      </Fade>
      <InnerContainer>
        <Fade in={true} timeout={300}>
          <div className={classes.headerContent}>
            <img className={classes.logo} src={logo} alt="The Siren Logo" />
          </div>
        </Fade>
        <Collapse in={transitionIn} appear={false}>
          <Navbar className={classes.navbar} menus={menus} />
          <Divider />
        </Collapse>
      </InnerContainer>
      <Fade in={transitionIn}>
        <div className={cx(classes.asideHeader, hideContent && classes.hide)}>
          <Icon className={classes.icon}>search</Icon>
        </div>
      </Fade>
      <MenuDrawer open={drawerOpen} onClose={closeDrawer} />
    </header>
  );
};

export default withStyles(styles)(Header);
