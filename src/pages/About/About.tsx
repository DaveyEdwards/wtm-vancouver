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
    actions: {
      display: 'flex',
    },
  });

const team = [
  {
    name: 'Davey Edwards',
    description:
      'Davey is obsessed with learning and building new things.  His primary focus right now is excelling his ability to build planetary scale applications with Google Cloud Platform, React, Apollo, and GraphQL using TypeScript.  Some other interests include video creation, biohacking, 3d modeling, physically building things, and manufacturing.',
    img:
      'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fdaveypart2.jpg?alt=media&token=4ceeb18f-d617-4b49-8942-f32590148192',
    actions: [
      {
        name: 'Twitter',
        url: 'https://www.twitter.com/daveyedwards',
      },
      {
        name: 'Github',
        url: 'https://github.com/DaveyEdwards',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/davey-edwards-a22412137/',
      },
    ],
  },
  {
    name: 'Kyle Ahn',
    description:
      'Kyle Ahn is always interested in learning and trying out new things, solving challenges, meeting new people, getting help and helping people in need. All of which made him join GDGCV. He does legwork, deals with venue, sponsorship and MC the events. In his free time, he looks at kitten gifs.',
    img:
      'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fkyle2.jpg?alt=media&token=951c2cdb-3e2a-4be8-b327-ae31a99efb4f',
    actions: [
      {
        name: 'Twitter',
        url: 'https://www.twitter.com/yyssahn',
      },
      {
        name: 'Github',
        url: 'https://github.com/yyssahn/',
      },
      {
        name: 'Website',
        url: 'yoonsungahn.net',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/yoonsungahn/',
      },
    ],
  },
  {
    name: 'Piyali Dey',
    description:
      'Piyali has been involved with Google Developers Group since early 2017 and has served as an organizer for both GDG Silicon Valley and GDG Cloud Vancouver. At present, she is also leading Google’s WomenTechmakers program in Vancouver, BC area. Piyali is a passionate speaker, mentor and community builder.',
    img:
      'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fpiyali2.jpg?alt=media&token=77b657c3-7847-4c2d-9456-a1ae01b3d69c',
    actions: [
      {
        name: 'Twitter',
        url: 'https://www.twitter.com/piyalidey_WTM',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/piyalidey/',
      },
    ],
  },
];

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
            GDG Cloud Vancouver is local community-ran meetup for developers
            interested in resources and technology from Google Developers. We
            focus majorly on Google Cloud Platform and Open Source technologies
            that are part of it.
          </Typography>

          <Spacer height={75} />

          <Typography variant="h4" color="textPrimary">
            <b>Meet the Team:</b>
          </Typography>

          <Spacer />

          {team.map(person => {
            return (
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
            );
          })}
        </div>
      </Page>
    );
  }
}

export default withStyles(styles)(Progress);
