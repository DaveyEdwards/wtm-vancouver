import * as React from 'react';
import Hero from '../../components/Hero';
import Page from '../../components/Page';
import Spacer from '../../components/Spacer/Spacer';
import { Link } from 'react-router-dom';
import {
  createStyles,
  CardMedia,
  Typography,
  withStyles,
  Button,
  Theme,
  CardContent,
  Card,
  CardActions,
} from '@material-ui/core';

interface Props {
  classes: {
    container: string;
    bannerImage: string;
    callToAction: string;
    pageContainer: string;
    cardMedia: string;
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
    cardMedia: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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

        <Spacer height={120} />

        <Hero
          backdrop={true}
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2Fgdg.jpg?alt=media&token=4df64f32-4373-4b82-864f-0fe4404216dc"
        >
          <div style={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              style={{
                color: 'white',
                textShadow: '0px 0px 24px black, 0px 0px 12px black',
              }}
            >
              GDGs are local groups of developers who are specifically
              interested in Google products and APIs
            </Typography>
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

        <Spacer height={240} />

        <div style={{ textAlign: 'center' }}>
          <Typography color="textPrimary" variant="h5">
            Interested in giving a talk or running a workshop?
          </Typography>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.callToAction}
              component={props => (
                <a
                  {...props}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdNGi_yqbqF20cKjrg3KIymtnwdl4zh5etsNDVOE7adZxjiQQ/viewform?usp=sf_link"
                />
              )}
            >
              Contact Us
            </Button>
          </div>
        </div>

        <Spacer height={200} />

        <Page maxWidth={420}>
          <Card>
            <CardMedia
              image="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Forgs_vol2.jpg?alt=media&token=6456059d-4c86-4fdf-beaf-da089ad89490"
              title="Organizers and Volunteers"
              className={classes.cardMedia}
            />
            <CardContent>
              <Typography variant="h4" color="textPrimary">
                The team
              </Typography>
              We host a variety of technical activities for developers - from
              just a few people getting together to watch our latest videos, to
              large gatherings with demos and tech talks, to hackathons.
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                className={classes.callToAction}
                component={(props: any) => <Link {...props} to={'/about'} />}
              >
                About us
              </Button>
            </CardActions>
          </Card>
        </Page>
        <Spacer height={240} />
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
        <Spacer height={240} />
        <Hero
          backdrop={true}
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2FIMG_20181020_112843-ANIMATION.gif?alt=media&token=11faf010-6d5c-447f-a8f7-b8a7ff9c9453"
        >
          <div style={{ textAlign: 'center', marginTop: '-180px' }}>
            <Typography style={{ color: 'white' }} variant="h5">
              <b>We also have a Women Techmakers group here in Vancouver</b>
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
