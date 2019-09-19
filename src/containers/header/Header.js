import React, { useState } from 'react';
import cx from 'classnames';
import {
  withStyles,
  useTheme,
  Fade,
  Collapse,
  Icon,
  IconButton,
} from '@material-ui/core';
import InnerContainer from 'components/containers/InnerContainer';
import logo from 'assets/logo.png';
import DetectTransition from 'components/animations/DetectTransition';
import Navbar from 'components/NavBar/Navbar';
import MenuDrawer from './MenuDrawer';

const styles = ({ breakpoints }) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px 38px 20px',
    [`@media (min-width:${breakpoints.width('lg')}px)`]: {
      padding: '30px 40px 38px 40px',
    },
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    marginTop: '28px',
    height: '53px',
  },
  navbar: {
    maxWidth: '65%',
    margin: '72px auto 32.5px auto',
  },
  asideHeader: {
    width: 40,
  },
  hide: {
    display: 'none',
  },
  menuIcon: {
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

const Header = ({ classes }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const breakpoint = theme.breakpoints.up('sm');
  const exitDuration = theme.transitions.duration.leavingScreen;

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <DetectTransition mediaQuery={breakpoint} exitDuration={exitDuration}>
      {({ transitionIn, hideContent }) => (
        <header className={classes.header}>
          <Fade in={transitionIn}>
            <div
              className={cx(classes.asideHeader, hideContent && classes.hide)}
            >
              icon
            </div>
          </Fade>
          <Fade in={!transitionIn}>
            <IconButton
              className={cx(classes.menuIcon, !hideContent && classes.hide)}
              onClick={openDrawer}
            >
              <Icon className={classes.icon}>menu</Icon>
            </IconButton>
          </Fade>
          <InnerContainer>
            <div className={classes.headerContent}>
              <img className={classes.logo} src={logo} alt="The Siren Logo" />
            </div>
            <Collapse in={transitionIn}>
              <Navbar className={classes.navbar} menus={menus} />
            </Collapse>
          </InnerContainer>
          <Fade in={transitionIn}>
            <div
              className={cx(classes.asideHeader, hideContent && classes.hide)}
            >
              search
            </div>
          </Fade>
          <MenuDrawer open={drawerOpen} onClose={closeDrawer} />
        </header>
      )}
    </DetectTransition>
  );
};

export default withStyles(styles)(Header);
