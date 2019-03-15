import * as React from 'react';
import appConfig from '../../appConfig';
import getSvg from '../../resources/getSvg';
import Hero from '../../components/Hero';
import Page from '../../components/Page';
import Spacer from '../../components/Spacer/Spacer';
import { Link } from 'react-router-dom';
import {
  Button,
  createStyles,
  Grid,
  Theme,
  Typography,
  withStyles,
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
    socialIcon: string;
    socialButton: string;
    iconBar: string;
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
    socialIcon: {
      marginRight: theme.spacing.unit,
    },
    socialButton: {
      color: 'white',
      margin: theme.spacing.unit,
    },
    iconBar: {
      textAlign: 'center',
      padding: theme.spacing.unit,
      background: theme.palette.secondary.main,
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
        <div className={classes.iconBar}>
          {appConfig.socialMedias.map(social => {
            return (
              <Button
                key={social.title}
                variant="text"
                color="inherit"
                className={classes.socialButton}
                target="__blank"
                component={(props: any) => <a {...props} href={social.url} />}
              >
                <img
                  className={classes.socialIcon}
                  src={getSvg(social.iconSrc)}
                  height={25}
                  width={25}
                />
                {social.title}
              </Button>
            );
          })}
        </div>
        <Spacer height={120} />

        <Page disablePadding={true}>
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <Typography variant="h4" color="textPrimary">
              <b>Vision and Mission for WTM Vancouver:</b>
            </Typography>
            <br />
            <Typography variant="body1" color="textPrimary">
              In BC, women make up only 20 % of the workforce in tech, far less
              than the national average. This has to change and we as a group
              want to ensure that we are doing our part to encourage the
              incredible diversity of our Vancouver community. We have brought
              together industry leaders, tech experts and community activists to
              support women (and all other minorities in tech) by providing
              content, tips, career advice and mentoring. Join our group, take
              part in events and see the magic happen.
              <br />
              <br />
              It is our mission to collaborate, learn, grow and inspire everyone
              in navigating their careers and help them to get a sit at the
              table. Lets start a conversation that better represent ourselves
              because Diversity indeed makes us stronger.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.callToAction}
              component={(props: any) => (
                <a {...props} href={'https://www.womentechmakers.com/'} />
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
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2Fheader-5.jpg?alt=media&token=433b1b19-54b3-4d49-bf1a-c73d0e43744f"
        />

        <div className={classes.colorBlock}>
          <div className={classes.centeredTextContainer}>
            <Typography variant="h5" style={{ color: 'white' }}>
              Looking to Sponsor, Volunteer, speak, run a workshop?
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

        <Hero
          backdrop={true}
          height={'640px'}
          img="https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/images%2Fhero.jpg?alt=media&token=d2ba8252-7da2-4cb9-aa4a-42e4c19c017f"
        >
          <div style={{ textAlign: 'center', marginTop: '-180px' }}>
            <Typography style={{ color: 'white' }} variant="h5">
              <b>Are you interested in Google Technologies?</b>
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
                Google Developer Group Cloud Vancouver
              </Button>
            </div>
          </div>
        </Hero>
      </div>
    );
  }
}

export default withStyles(styles)(Progress);
