import * as React from 'react';
import appConfig from '../../appConfig';
import Page from '../../components/Page';
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
      minWidth: 212,
      height: 256,
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
            <b>About us</b>
          </Typography>
          <Spacer />
          <Typography variant="body1" color="textPrimary">
            {appConfig.aboutUsDescription}
          </Typography>

          <Spacer height={75} />

          <Typography variant="h4" color="textPrimary">
            <b>Meet the Organizing Team:</b>
          </Typography>

          <Spacer />

          {appConfig.organizers.map(person => {
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
                      <br />
                      <Typography variant="body1" color="textPrimary">
                        {person.description}
                      </Typography>
                    </CardContent>
                  </div>
                </div>
                <CardActions className={classes.actions}>
                  {person.actions.map(action => {
                    return (
                      <Button
                        key={action.name}
                        color="primary"
                        component={(props: any) => (
                          <a {...props} target="__blank" href={action.url} />
                        )}
                      >
                        {action.name}
                      </Button>
                    );
                  })}
                </CardActions>
              </Card>
            ) : (
              <Card style={{ marginBottom: 12 }}>
                <CardMedia
                  className={classes.smallCardCover}
                  image={person.img}
                  title={person.name}
                />
                <CardContent>
                  <Typography variant="h4" color="textPrimary">
                    <b>{person.name}</b>
                  </Typography>
                  <br />
                  <Typography variant="body1" color="textPrimary">
                    {person.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                  {person.actions.map(action => {
                    return (
                      <Button
                        key={action.name}
                        color="primary"
                        component={(props: any) => (
                          <a {...props} target="__blank" href={action.url} />
                        )}
                      >
                        {action.name}
                      </Button>
                    );
                  })}
                </CardActions>
              </Card>
            );
          })}
        </div>
      </Page>
    );
  }
}

export default withStyles(styles)(Progress);
