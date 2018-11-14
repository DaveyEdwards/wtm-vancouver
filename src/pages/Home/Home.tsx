import * as React from 'react';
import Hero from '../../components/Hero';
import Page from '../../components/Page';
import Spacer from '../../components/Spacer/Spacer';
import { Link } from 'react-router-dom';
import {
  createStyles,
  Typography,
  withStyles,
  Button,
  Theme,
} from '@material-ui/core';

interface Props {
  classes: {
    container: string;
    bannerImage: string;
    callToAction: string;
    pageContainer: string;
  };
}

interface State {}

const styles = (theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
      margin: '124px 24px',
      padding: theme.spacing.unit * 3,
      background: 'white',
      borderRadius: 12,
    },
    bannerImage: {
      width: '100%',
    },
    callToAction: {
      margin: 24,
    },
    pageContainer: {
      padding: theme.spacing.unit * 3,
    },
  });

class Progress extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Page disablePadding={true}>
        <div className={classes.container}>
          <img src={'/gdgcloudvan.svg'} style={{ maxWidth: '60%' }} />
          <Typography variant="h5">
            Enabeling you to build whats next, today.
          </Typography>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.callToAction}
              component={(props: any) => (
                <Link {...props} to={'/upcoming-events'} />
              )}
            >
              Upcoming Events
            </Button>
          </div>
        </div>

        <Page maxWidth={620}>
          <div className={classes.pageContainer}>
            <Typography variant="h5" color="textPrimary">
              GDGs are local groups of developers who are specifically
              interested in Google products and APIs
            </Typography>
          </div>
        </Page>

        <Spacer height={120} />

        <Hero
          backdrop={true}
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2Fgdg.jpg?alt=media&token=4df64f32-4373-4b82-864f-0fe4404216dc"
        >
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.callToAction}
              component={(props: any) => <Link {...props} to={'/photos'} />}
            >
              View Photos
            </Button>
          </div>
        </Hero>

        <Spacer height={120} />

        <Page maxWidth={620}>
          <div className={classes.pageContainer}>
            <Typography variant="h5" color="textPrimary">
              We host a variety of technical activities for developers - from
              just a few people getting together to watch our latest videos, to
              large gatherings with demos and tech talks, to hackathons.
            </Typography>
          </div>
        </Page>

        <Spacer height={120} />

        <Hero
          backdrop={true}
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2Fteam.jpg?alt=media&token=31f2579d-3f11-401c-9b57-1fc64e9176c4"
        >
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.callToAction}
              component={(props: any) => <Link {...props} to={'/about'} />}
            >
              About us
            </Button>
          </div>
        </Hero>

        <Spacer height={120} />

        <div style={{ textAlign: 'center' }}>
          <Typography color="textPrimary" variant="h5">
            Needs some help or wish to see videos from our previous events?
          </Typography>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.callToAction}
              component={(props: any) => <Link {...props} to={'/resources'} />}
            >
              Resources
            </Button>
          </div>
        </div>
        <Spacer height={120} />

        <Hero
          backdrop={true}
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2FIMG_20181020_112843-ANIMATION.gif?alt=media&token=11faf010-6d5c-447f-a8f7-b8a7ff9c9453"
        >
          <div style={{ textAlign: 'center', marginTop: '-180px' }}>
            <Typography style={{ color: 'white' }} variant="h5">
              We also have a Women Techmakers group here in Vancouver
            </Typography>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.callToAction}
                component={(props: any) => (
                  <a {...props} href={'https://wtmgdgvancouver.com/'} />
                )}
              >
                Women Techmakers
              </Button>
            </div>
          </div>
        </Hero>
      </Page>
    );
  }
}

export default withStyles(styles)(Progress);
