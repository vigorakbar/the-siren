import React from 'react';
import cx from 'classnames';
import { withStyles, useTheme, Fade } from '@material-ui/core';
import InnerContainer from 'components/containers/InnerContainer';
import logo from 'assets/logo.png';
import DetectTransition from 'components/animations/DetectTransition';

const styles = ({ breakpoints }) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px 38px 20px',
    [`@media (min-width:${breakpoints.width('lg')}px)`]: {
      padding: '30px 40px 38px 40px',
    },
  },
  mainHeader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '28px',
  },
  asideHeader: {
    width: 40,
  },
  hide: {
    display: 'none',
  },
});

const Header = ({ classes }) => {
  const theme = useTheme();
  const breakpoint = theme.breakpoints.up('sm')
  const exitDuration = theme.transitions.duration.leavingScreen

  return (
    <DetectTransition
      mediaQuery={breakpoint}
      exitDuration={exitDuration}
    >
      {({ transitionIn, hideContent }) => (
        <header className={classes.header}>
          <Fade in={transitionIn}>
            <div
              className={cx(classes.asideHeader, hideContent && classes.hide)}
            >
              icon
            </div>
          </Fade>
          <InnerContainer className={classes.mainHeader}>
            <img src={logo} alt="The Siren Logo" />
          </InnerContainer>
          <Fade in={transitionIn}>
            <div
              className={cx(classes.asideHeader, hideContent && classes.hide)}
            >
              search
            </div>
          </Fade>
        </header>
      )}
    </DetectTransition>
  );
};

export default withStyles(styles)(Header);
