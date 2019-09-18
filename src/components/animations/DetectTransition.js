import { useState, useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import PropTypes from 'prop-types';

// Detect animation transition and handle hide/show content
const DetectTransition = ({ children, mediaQuery, exitDuration }) => {
  const isVisible = useMediaQuery(mediaQuery);
  const [hideContent, setHideContent] = useState(false);
  const [transitionIn, setTransitionIn] = useState(isVisible);

  useEffect(() => {
    let timeOut;
    if (isVisible) {
      setHideContent(false);
      timeOut = setTimeout(() => setTransitionIn(true), 100);
    } else {
      setTransitionIn(false);
      timeOut = setTimeout(() => setHideContent(true), exitDuration);
    }

    return () => clearTimeout(timeOut);
  }, [isVisible, exitDuration]);

  return children({ transitionIn, hideContent });
};

DetectTransition.propTypes = {
  mediaQuery: PropTypes.string.isRequired, // example: (min-width: 100px)
  exitDuration: PropTypes.number.isRequired,
};

export default DetectTransition;
