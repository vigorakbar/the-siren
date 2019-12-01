import React from 'react';
import cx from 'classnames';
import { withStyles, Divider } from '@material-ui/core';

const styles = ({ breakpoints, palette }) => ({
  overlay: {
    position: 'absolute',
    color: 'white',
    bottom: 0,
    width: '80%',
    [breakpoints.up('sm')]: {
      width: '70%',
    },
  },
  overlayMargin: {
    [breakpoints.up('xl')]: {
      margin: '0 0 85px 62px',
    },
    margin: '0 0 4.4vw 3.2vw',
  },
  overlayMarginSmall: {
    [breakpoints.up('xl')]: {
      margin: '0 0 47px 40px',
    },
    margin: '0 0 1.8vw 1.5vw',
  },
  overlayIndex: {
    fontFamily: 'Open Sans',
    [breakpoints.up('sm')]: {
      fontSize: '2.8rem',
    },
    fontSize: '1.8rem',
    fontWeight: 600,
    lineHeight: 1.07,
    '& .index-slash': {
      position: 'absolute',
      left: -4,
      fontWeight: 400,
    },
  },
  overlayTitle: {
    [breakpoints.up('sm')]: {
      fontSize: '3.6rem',
    },
    fontSize: '1.8rem',
  },
  overlayTitleSmall: {
    fontSize: '2.1rem',
  },
  overlayInfo: {
    fontFamily: 'Open Sans',
    fontSize: '1.2rem',
    lineHeight: 1.67,
  },
  overlayContent: {
    marginLeft: '1.5vw',
    [breakpoints.up('xl')]: {
      marginLeft: '28px',
    },
  },
  underlineText: {
    textDecoration: 'underline',
    textDecorationColor: palette.common.orange,
  },
});

const Overlay = ({
  index,
  data,
  classes,
  className,
  underlineText,
  size = 'medium',
  ...otherProps
}) => {
  const isMedium = size === 'medium';
  return (
    <div
      className={cx(
        classes.overlay,
        isMedium ? classes.overlayMargin : classes.overlayMarginSmall,
        className
      )}
      {...otherProps}
    >
      {index !== undefined && (
        <p className={cx(classes.overlayContent, classes.overlayIndex)}>
          <span className="index-slash">/</span>
          {index + 1}
        </p>
      )}
      <p
        className={cx(
          classes.overlayContent,
          isMedium ? classes.overlayTitle : classes.overlayTitleSmall,
          underlineText && classes.underlineText
        )}
      >
        {data.title}
      </p>
      {data.description && (
        <p className={cx(classes.overlayContent, classes.overlaycontent)}>
          {data.description}
        </p>
      )}
      <p className={cx(classes.overlayContent, classes.overlayInfo)}>
        {data.category.toUpperCase()} / {data.releaseDate.toUpperCase()}
      </p>
      {!isMedium && <Divider className={classes.overlayContent} style={{width: 30}} />}
    </div>
  );
};

export default withStyles(styles)(Overlay);
