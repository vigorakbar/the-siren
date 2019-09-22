import { useRef, useEffect } from 'react';
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};


// Detect animation transition and return hide 
export const useDetectTransition = (breakpoint = 'sm') => {
  const theme = useTheme();
  const isVisible = useMediaQuery(theme.breakpoints.up(breakpoint));
  const exitDuration = theme.transitions.duration.leavingScreen;
  
  const [hideContent, setHideContent] = useState(!isVisible);
  const [transitionIn, setTransitionIn] = useState(false);
  
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

  return { transitionIn, hideContent };
};
