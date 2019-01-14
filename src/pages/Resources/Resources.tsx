import * as React from 'react';
import Page from '../../components/Page';
import Spacer from '../../components/Spacer';
import {
  CardActions,
  Card,
  createStyles,
  Typography,
  withStyles,
  CardContent,
  Button,
  Grid,
} from '@material-ui/core';

interface Props {
  classes: {
    container: string;
    pageTitle: string;
    card: string;
    details: string;
    content: string;
    cover: string;
    actions: string;
    cardPrimary: string;
    vertSpacing: string;
    imgContainer: string;
  };
}

interface State {}

const styles = (theme: any) =>
  createStyles({
    container: {
      padding: theme.spacing.unit * 3,
    },
    pageTitle: {
      marginBottom: theme.spacing.unit * 3,
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      margin: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing
        .unit * 6}px ${theme.spacing.unit}px`,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      height: 232,
    },
    content: {
      flex: '1 0 auto',
    },
    imgContainer: {
      height: 132,
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
    },
    cover: {
      maxHeight: '100%',
    },
    actions: {
      display: 'flex',
    },
    vertSpacing: {
      flexGrow: 1,
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
      <Page>
        <div className={classes.container}>
          <Spacer />
          <Typography
            variant="h1"
            color="textPrimary"
            className={classes.pageTitle}
          >
            <b>Resources</b>
          </Typography>
          <Spacer />
          <Typography variant="body1" color="textPrimary">
            Here are some helpful resources for you to find us, or get help with
            Google Cloud Platform
          </Typography>

          <Spacer height={75} />

          <Grid container spacing={24}>
            <Grid item xs={12} md={6} lg={4}>
              <Card className={classes.card}>
                <div className={classes.imgContainer}>
                  <img
                    style={{ height: 35, margin: 'auto' }}
                    className={classes.cover}
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/icons%2Fyoutube.png?alt=media&token=199ba5f2-1511-4ee2-afd3-2cca54e9e185'
                    }
                    alt={'Youtube'}
                  />
                </div>

                <CardContent className={classes.details}>
                  <Typography variant="h4" color="textPrimary">
                    <b>YouTube</b>
                  </Typography>
                  <br />
                  <Typography variant="body1" color="textPrimary">
                    Here is where we keep any recordings we take of
                    presentations of our events
                  </Typography>
                  <div className={classes.vertSpacing} />
                  <CardActions className={classes.actions}>
                    <Button
                      color="primary"
                      variant="contained"
                      component={(props: any) => (
                        <a
                          {...props}
                          target="__blank"
                          href={
                            'https://www.youtube.com/channel/UCCgsik5HG_bNwE4HqaN-Pbg/videos'
                          }
                        />
                      )}
                    >
                      Youtube
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <Card className={classes.card}>
                <div className={classes.imgContainer}>
                  <img
                    style={{ height: 82, margin: 'auto' }}
                    className={classes.cover}
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/icons%2FDiscord-Logo%2BWordmark-Color.png?alt=media&token=6cb4d108-dda2-4c52-84bd-1d2284461190'
                    }
                    alt={'Discord'}
                  />
                </div>

                <CardContent className={classes.details}>
                  <Typography variant="h4" color="textPrimary">
                    <b>Discord</b>
                  </Typography>
                  <br />
                  <Typography variant="body1" color="textPrimary">
                    This is where we do all of our internal communication and
                    have public channels for everyone in the community to use
                  </Typography>
                  <div className={classes.vertSpacing} />
                  <CardActions className={classes.actions}>
                    <Button
                      color="primary"
                      variant="contained"
                      component={(props: any) => (
                        <a
                          {...props}
                          target="__blank"
                          href={'https://discord.gg/fVaDH6n'}
                        />
                      )}
                    >
                      Join Discord
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <Card className={classes.card}>
                <div className={classes.imgContainer}>
                  <img
                    className={classes.cover}
                    style={{
                      maxWidth: '100%',
                      height: '132px',
                    }}
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/icons%2Fslack-1-226535.png?alt=media&token=7aaa4b29-e18f-416d-a755-56f252169d1b'
                    }
                    alt={'Slack'}
                  />
                </div>
                <CardContent className={classes.details}>
                  <Typography variant="h4" color="textPrimary">
                    <b>Slack</b>
                  </Typography>
                  <br />
                  <Typography variant="body1" color="textPrimary">
                    This is the best place to get help with Google Cloud
                    Platform. Many of the Engineers working on the products you
                    use can be seen here
                  </Typography>
                  <div className={classes.vertSpacing} />
                  <CardActions className={classes.actions}>
                    <Button
                      color="primary"
                      variant="contained"
                      component={(props: any) => (
                        <a
                          {...props}
                          target="__blank"
                          href={'https://gcp-slack.appspot.com/'}
                        />
                      )}
                    >
                      Join Slack
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Spacer />
        </div>
      </Page>
    );
  }
}

export default withStyles(styles)(Progress);
