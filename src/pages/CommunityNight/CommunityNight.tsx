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
  Theme,
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

const styles = (theme: Theme) =>
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
      minWidth: 120,
      height: 150,
    },
    smallCardCover: {
      height: 150,
      backgroundSize: 'contain',
    },
    actions: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  });

class CommunityNight extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Page>
        <div
          style={{
            minHeight: window.innerWidth > 480 ? 289 : 200,
            width: '100%',
            maxWidth: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${appConfig.communityNight.heroSrc})`,
          }}
        />
        <div className={classes.container}>
          <Spacer />

          {appConfig.communityNight.links.map(link => {
            return window.innerWidth > 680 ? (
              <Card key={link.title} className={classes.card}>
                <div className={classes.cardPrimary}>
                  <CardMedia
                    className={classes.cover}
                    image={link.iconSrc}
                    title={link.title}
                  />
                  <div className={classes.details}>
                    <CardContent>
                      <Typography variant="h4" color="textPrimary">
                        <b>{link.title}</b>
                      </Typography>
                      <br />
                      <Typography variant="body1" color="textPrimary">
                        {link.description}
                      </Typography>
                    </CardContent>
                  </div>
                </div>
                <CardActions className={classes.actions}>
                  <Button
                    color="primary"
                    variant="contained"
                    component={(props: any) => (
                      <a {...props} target="__blank" href={link.url} />
                    )}
                  >
                    {link.btnText}
                  </Button>
                </CardActions>
              </Card>
            ) : (
              <Card key={link.title} style={{ marginBottom: 12 }}>
                <CardMedia
                  className={classes.smallCardCover}
                  image={link.iconSrc}
                  title={link.title}
                />
                <CardContent>
                  <Typography variant="h4" color="textPrimary">
                    <b>{link.title}</b>
                  </Typography>
                  <br />
                  <Typography variant="body1" color="textPrimary">
                    {link.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                  <Button
                    color="primary"
                    variant="contained"
                    component={(props: any) => (
                      <a {...props} target="__blank" href={link.url} />
                    )}
                  >
                    {link.btnText}
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
        <Spacer />
        <Spacer />
      </Page>
    );
  }
}

export default withStyles(styles)(CommunityNight);
