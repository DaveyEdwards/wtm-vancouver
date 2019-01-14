import * as React from 'react';
import appConfig from './appConfig';
import withStyles from '@material-ui/core/styles/withStyles';
import { createGenerateClassName, Theme } from '@material-ui/core/styles';
import { JssProvider } from 'react-jss';
import { SheetsRegistry } from 'jss';
import {
  Card,
  createMuiTheme,
  createStyles,
  MuiThemeProvider,
} from '@material-ui/core';

interface Props {
  classes: {
    app: string;
    root: string;
  };
  lightTheme: boolean;
}

const theme = (theme: any) =>
  createMuiTheme({
    ...theme,
    typography: {
      useNextVariants: true,
      body1: {
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.83)',
      },
      h1: {
        color: 'rgba(0, 0, 0, 0.83)',
        fontSize: '5rem',
      },
      h2: {
        color: 'rgba(0, 0, 0, 0.83)',
      },
      h3: {
        color: 'rgba(0, 0, 0, 0.83)',
      },
      h4: {
        color: 'rgba(0, 0, 0, 0.83)',
      },
      h5: {
        color: 'rgba(0, 0, 0, 0.83)',
      },
      h6: {
        color: 'rgba(0, 0, 0, 0.83)',
      },
    },
  });

const styles = () =>
  createStyles({
    app: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      borderRadius: 0,
    },
    root: {
      position: 'relative',
      display: 'flex',
      height: '100%',
      width: '100%',
    },
  });

const generateClassName = createGenerateClassName();

const sheetsRegistry = new SheetsRegistry();

class MaterialUI extends React.Component<Props> {
  render() {
    const { classes, lightTheme } = this.props;

    const appTheme = {
      palette: {
        ...appConfig.palette,
        type: lightTheme ? 'light' : 'dark',
      },
    };

    return (
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={theme(appTheme)}>
          <Card className={classes.app}>
            <div className={classes.root}>{this.props.children}</div>
          </Card>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default withStyles(styles)(MaterialUI);
