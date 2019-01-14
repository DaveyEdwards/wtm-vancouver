import * as React from 'react';
import appConfig from '../../appConfig';
import moment from 'moment';
import Page from '../../components/Page';
import Progress from '../../components/Progress';
import Spacer from '../../components/Spacer';

import {
  CardActions,
  Card,
  createStyles,
  Typography,
  withStyles,
  CardContent,
  CardMedia,
  Button,
  Grid,
  CardActionArea,
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
    media: string;
    cardContent: string;
  };
}

interface Event {
  id: string;
  name: string;
  local_date: string;
  local_time: string;
  link: string;
  featured_photo: {
    photo_link: string;
  };
  venue: {
    name: string;
  };
}

interface State {
  events: Event[];
  loading: boolean;
}

const styles = (theme: any) =>
  createStyles({
    container: {
      padding: theme.spacing.unit * 3,
    },
    pageTitle: {
      marginBottom: theme.spacing.unit * 3,
    },

    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      height: 300,
      flexDirection: 'column',
      display: 'flex',
    },
  });

class Events extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(appConfig.firebaseSettings.meetupCloudFunctionUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response: any) => response.json())
      .then(res => {
        const events = JSON.parse(res.body);
        this.setState({ events, loading: false } as any);
      })
      .catch((error: any) => console.log(error));
  }

  formatDate = (date: string) => {
    return moment(date).format('MMMM Do YYYY');
  };

  render() {
    const { classes } = this.props;
    const { events, loading } = this.state;

    return (
      <Page>
        <div className={classes.container}>
          <Spacer />

          <Typography variant="h1" color="textPrimary">
            <b>Upcoming Events</b>
          </Typography>

          <Spacer height={124} />

          {loading ? (
            <div>
              <Progress />
              <Spacer height={240} />
            </div>
          ) : (
            <Grid container spacing={24}>
              {events.length ? (
                events.map(event => {
                  return (
                    <Grid key={event.id} item xs={12} md={6} lg={4}>
                      <Card>
                        <CardActionArea
                          component={(props: any) => (
                            <a {...props} target="__blank" href={event.link} />
                          )}
                        >
                          <CardMedia
                            className={classes.media}
                            image={event.featured_photo.photo_link}
                          />
                        </CardActionArea>
                        <CardContent className={classes.cardContent}>
                          <Typography variant="h5" color="textPrimary">
                            <b>{event.name}</b>
                          </Typography>
                          <div style={{ flexGrow: 1 }} />
                          <Typography variant="caption" color="textPrimary">
                            Venue:
                          </Typography>
                          <Typography variant="body1" color="textPrimary">
                            {event.venue.name}
                          </Typography>
                          <br />
                          <Typography variant="caption" color="textPrimary">
                            Date:
                          </Typography>
                          <Typography variant="body1" color="textPrimary">
                            {this.formatDate(event.local_date)}
                          </Typography>
                          <div style={{ flexGrow: 1 }} />
                        </CardContent>
                        <CardActions>
                          <Button
                            color="primary"
                            variant="contained"
                            component={(props: any) => (
                              <a
                                {...props}
                                target="__blank"
                                href={event.link}
                              />
                            )}
                          >
                            View Event
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })
              ) : (
                <Typography variant="h3">
                  We currently planning our next Meetup, check back soon...
                </Typography>
              )}
            </Grid>
          )}
          <Spacer height={124} />
          <div style={{ textAlign: 'center' }}>
            <Typography variant="body1" color="textPrimary">
              Or view our Event's page on Meetup
            </Typography>
            <br />
            <Button
              color="primary"
              variant="contained"
              component={(props: any) => (
                <a {...props} target="__blank" href={appConfig.meetupUrl} />
              )}
            >
              Meetup Page
            </Button>
          </div>
          <Spacer height={124} />
        </div>
      </Page>
    );
  }
}

export default withStyles(styles)(Events);
