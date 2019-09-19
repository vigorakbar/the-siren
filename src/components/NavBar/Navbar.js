import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Menu from './Menu';

const styles = () => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '1.8rem',
  },
});

const Navbar = ({
  classes,
  menus,
  defaultActivePosition = 'center',
  className,
}) => {
  const menuLength = menus.length;
  let defaultActiveLink;
  if (defaultActivePosition === 'start') {
    defaultActivePosition = menus[0] && menus[0].link;
  } else {
    defaultActiveLink =
      menuLength && menuLength % 2 === 0
        ? menus[menuLength / 2 - 1].link
        : menus[(menuLength + 1) / 2 - 1].link;
  }
  const [activeLink, setActiveLink] = useState(defaultActiveLink);

  return (
    <nav className={cx(className, classes.nav)}>
      {menus.map((menu, i) => {
        const menuLink = menu.link;
        return (
          <Menu
            key={i}
            label={menu.label}
            link={menuLink}
            active={menuLink === activeLink}
            onClick={() => setActiveLink(menuLink)}
          />
        );
      })}
    </nav>
  );
};

Navbar.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default withStyles(styles)(Navbar);
