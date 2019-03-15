import * as React from 'react';
import appConfig from '../../appConfig';
import Page from '../../components/Page';
import Spacer from '../../components/Spacer';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Typography,
  withStyles,
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
    smallCardCover: string;
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
    cardPrimary: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      minWidth: 256,
      backgroundSize: 'contain',
      margin: theme.spacing.unit * 2,
    },
    smallCardCover: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
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
            className={classes.pageTitle}
            color="textPrimary"
          >
            <b>Testimonials</b>
          </Typography>
          <Spacer />

          <Spacer height={75} />

          <Typography variant="h4" color="textPrimary">
            <b>Hear what our Speakers say about us:</b>
          </Typography>

          <Spacer />

          {appConfig.testimonials.speakers.map(person => {
            return window.innerWidth > 680 ? (
              <Card key={person.name} className={classes.card}>
                <div className={classes.cardPrimary}>
                  <CardMedia
                    className={classes.cover}
                    image={person.img}
                    title={person.name}
                  />
                  <div className={classes.details}>
                    <CardContent>
                      <Typography variant="h4" color="textPrimary">
                        <b>{person.name}</b>
                      </Typography>
                      <Typography variant="subtitle1" color="textPrimary">
                        {person.info}
                      </Typography>
                      <br />
                      <Typography variant="body1" color="textPrimary">
                        <i>{person.description}</i>
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ) : (
              <Card style={{ marginBottom: 12 }} key={person.name}>
                <CardMedia
                  className={classes.smallCardCover}
                  image={person.img}
                  title={person.name}
                />
                <CardContent>
                  <Typography variant="h4" color="textPrimary">
                    <b>{person.name}</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    {person.info}
                  </Typography>
                  <br />
                  <Typography variant="body1" color="textPrimary">
                    {person.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}

          <Typography variant="h4" color="textPrimary">
            <b>Some words from our Community:</b>
          </Typography>

          <Spacer />

          {appConfig.testimonials.attendees.map(person => {
            return (
              <Card key={person.name} className={classes.card}>
                <div className={classes.cardPrimary}>
                  <div className={classes.details}>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary">
                        <b>{person.name}</b>
                      </Typography>
                      <br />
                      <Typography variant="body1" color="textPrimary">
                        <i>{person.description}</i>
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Page>
    );
  }
}

export default withStyles(styles)(Progress);
