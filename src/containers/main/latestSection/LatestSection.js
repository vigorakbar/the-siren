import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import InnerContainer from 'components/containers/InnerContainer';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import OuterContainer from 'components/containers/OuterContainer';
import { getLatestData } from 'helpers/requests/latestSection';

const styles = ({ palette, breakpoints }) => ({
  contentOuter: {
    backgroundColor: palette.background.grey,
  },
  contentInner: {
    paddingTop: '2.6vw',
    [breakpoints.up('xl')]: {
      paddingTop: '50px',
    },
  },
});

const LatestSection = ({ classes, className }) => {
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    getLatestData().then(res => {
      setLatestData(res.data);
    });
  }, []);

  return (
    <section className={className}>
      <OuterContainer>
        <InnerContainer>
          <SectionTitle title="The Latest" />
        </InnerContainer>
      </OuterContainer>
      <OuterContainer className={classes.contentOuter}>
        <InnerContainer className={classes.contentInner}>
          {latestData.map(item => (
            <div key={item.id}>{item.title}</div>
          ))}
        </InnerContainer>
      </OuterContainer>
    </section>
  );
};

export default withStyles(styles)(LatestSection);
