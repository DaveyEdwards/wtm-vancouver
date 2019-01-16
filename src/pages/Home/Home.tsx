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
    openingHeroContainer: string;
    bannerImage: string;
    callToAction: string;
    pageContainer: string;
    cardMedia: string;
    colorBlock: string;
    centeredTextContainer: string;
  };
}

interface State {}

const styles = (theme: Theme) =>
  createStyles({
    openingHeroContainer: {
      textAlign: 'center',
      width: '100%',
      maxWidth: 400,
      margin: '0px auto',
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
    colorBlock: {
      background: theme.palette.primary.main,
      height: 600,
      width: '100%',
      textAlign: 'center',
      position: 'relative',
    },
    centeredTextContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
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
      <div>
        <Hero
          height={'640px'}
          backdrop={true}
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2FIMG_20181020_112843-ANIMATION.gif?alt=media&token=11faf010-6d5c-447f-a8f7-b8a7ff9c9453"
        >
          <div className={classes.openingHeroContainer}>
            <img src={'/logo-name.png'} style={{ maxWidth: '100%' }} />
            <Typography
              style={{
                color: 'white',
                textShadow: '0px 0px 24px black, 0px 0px 12px black',
              }}
              variant="h4"
            >
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
        </Hero>

        <Spacer height={120} />

        <Page disablePadding={true}>
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <Typography variant="h4" color="textPrimary">
              <b>What is WTM?</b>
            </Typography>
            <br />
            <Typography variant="body1" color="textPrimary">
              Google's Women Techmakers program provides visibility, community,
              and resources for women in technology.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.callToAction}
              component={(props: any) => (
                <a
                  {...props}
                  href={'https://developers.google.com/programs/community/gdg/'}
                />
              )}
            >
              Learn More
            </Button>
          </div>
        </Page>

        <Spacer height={182} />

        <Hero
          backdrop={true}
          height="580px"
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2Fgdg.jpg?alt=media&token=4df64f32-4373-4b82-864f-0fe4404216dc"
        />

        <div className={classes.colorBlock}>
          <div className={classes.centeredTextContainer}>
            <Typography variant="h5" style={{ color: 'white' }}>
              Presenting or giving a Workshop sound interesting to you? Get in
              touch with us!
            </Typography>
            <div>
              <Button
                variant="contained"
                color="secondary"
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
        </div>

        <div className={classes.colorBlock} style={{ background: '#DD5044' }}>
          <div className={classes.centeredTextContainer}>
            <Typography variant="h5" style={{ color: 'white' }}>
              Looking for some help or wish to see previous event presentations?
            </Typography>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.callToAction}
                component={(props: any) => (
                  <Link {...props} to={'/resources'} />
                )}
              >
                Resources
              </Button>
            </div>
          </div>
        </div>

        <Hero
          backdrop={true}
          height={'640px'}
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2Fhero.jpg?alt=media&token=d2ba8252-7da2-4cb9-aa4a-42e4c19c017f"
        >
          <div style={{ textAlign: 'center', marginTop: '-180px' }}>
            <Typography style={{ color: 'white' }} variant="h5">
              <b>We also have a GDG Cloud group here in Vancouver</b>
            </Typography>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.callToAction}
                component={(props: any) => (
                  <a {...props} href={'https://gdgvancouver.com/'} />
                )}
              >
                GDG Cloud
              </Button>
            </div>
          </div>
        </Hero>
      </div>
    );
  }
}

export default withStyles(styles)(Progress);
