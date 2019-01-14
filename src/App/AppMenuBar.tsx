import * as React from 'react';
import appConfig from '../appConfig';
import { Link } from 'react-router-dom';
import {
  Theme,
  AppBar,
  createStyles,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

interface State {}

interface Props {
  classes: {
    appBar: string;
    menuButton: string;
    siteTitle: string;
    siteIcon: string;
  };
  showNavigation: boolean;
  handleNavigationToggle: () => void;
  handleLightThemeChange: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      height: 48,
      left: 0,
      display: 'flex',
      zIndex: 1201,
      overflow: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 8,
    },
    siteTitle: {
      flexGrow: 1,
      fontSize: '1.2125rem',
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
    siteIcon: {
      width: 32,
      maxHeight: 32,
      float: 'left',
      margin: '2px 8px 0px 0px',
    },
  });

class AppMenuBar extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes,
      handleNavigationToggle,
      handleLightThemeChange,
    } = this.props;

    return (
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar style={{ minHeight: 48 }}>
          <IconButton
            className={classes.menuButton}
            onClick={handleNavigationToggle}
            color="default"
            aria-label="Menu"
          >
            <Icon>menu</Icon>
          </IconButton>

          <Typography
            variant="h4"
            color="default"
            className={classes.siteTitle}
            component={(props: any) => <Link {...props} to="/" />}
          >
            <span style={{ height: 48 }}>
              <img
                alt={appConfig.meetupName}
                src={appConfig.logo}
                className={classes.siteIcon}
              />
              <span> {appConfig.meetupName}</span>
            </span>
          </Typography>

          <IconButton onClick={() => handleLightThemeChange()} color="primary">
            <Icon>invert_colors</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppMenuBar);
