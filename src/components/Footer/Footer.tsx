import * as React from 'react';
import appConfig from '../../appConfig';
import getSvg from '../../resources/getSvg';
import { Link } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles';
import {
  Button,
  createStyles,
  withStyles,
  Typography,
} from '@material-ui/core';

interface Props {
  classes: {
    container: string;
    socialButton: string;
    socialIcon: string;
    socialContainer: string;
  };
}

const styles = (theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      position: 'relative',
      background: theme.palette.primary.main,
      textAlign: 'center',
      color: 'white',
      minHeight: 200,
    },
    socialIcon: {
      marginRight: theme.spacing.unit,
    },
    socialButton: {
      margin: theme.spacing.unit,
    },
    socialContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  });

class Footer extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.socialContainer}>
          <Typography color="inherit" variant="h5">
            Find us online!
          </Typography>
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
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
