import * as React from 'react';
import appConfig from '../appConfig';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import {
  Divider,
  Drawer,
  Hidden,
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const drawerWidth = 240;

const styles = (theme: any) => ({
  navigation: {
    overflow: 'hidden',
    width: '0px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
    navigation: {
      minWidth: (props: any) => (props.showNavigation ? drawerWidth : '64px'),
    },
  },

  [`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
    navigation: {
      minWidth: (props: any) => (props.showNavigation ? drawerWidth : '64px'),
    },
  },

  drawerPaper: {
    background: theme.palette.background.default,
    position: 'fixed',
    height: '100%',
    top: '0',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      top: 48,
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    width: 64,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  bottomNav: {
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    background: theme.palette.background.default,
    bottom: 0,
    position: 'fixed',
    width: '100%',
  },
  iconImg: {
    height: 24,
    width: 24,
    overflow: 'show',
  },
});

interface Props {
  classes: {
    navigation: string;
    drawerPaper: string;
    drawerPaperClose: string;
    drawerInner: string;
    bottomNav: string;
    iconImg: string;
  };
  profile: {
    username: string;
  };
  showNavigation: boolean;
  handleNavigationToggle: () => void;
}

interface State {}

class Navigation extends React.Component<Props, State> {
  state = {};

  render() {
    const { classes, showNavigation, handleNavigationToggle } = this.props;
    const navItems = appConfig.navigationItems;
    return (
      <div className={classes.navigation}>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            onClose={() => handleNavigationToggle()}
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !showNavigation && classes.drawerPaperClose,
              ),
            }}
            open={showNavigation}
          >
            <div className={classes.drawerInner}>
              {navItems.length
                ? navItems.map((item, index) => {
                    const listItemIcon = item.src ? (
                      <img className={classes.iconImg} src={item.src} />
                    ) : (
                      <ListItemIcon>
                        <Icon>{item.icon}</Icon>
                      </ListItemIcon>
                    );

                    switch (item.type) {
                      case 'BUTTON': {
                        return (
                          <ListItem
                            button
                            key={item.title + index}
                            component={(props: any) =>
                              item.slug ? (
                                <Link
                                  {...props}
                                  onClick={() => handleNavigationToggle()}
                                  to={item.slug}
                                />
                              ) : (
                                <a
                                  {...props}
                                  href={item.href}
                                  target="__blank"
                                />
                              )
                            }
                          >
                            {listItemIcon}
                            <ListItemText primary={item.title} />
                          </ListItem>
                        );
                      }
                      case 'DIVIDER': {
                        return <Divider key={index} />;
                      }

                      default:
                        return null;
                    }
                  })
                : null}
            </div>
          </Drawer>
        </Hidden>

        <Hidden smDown>
          <div>
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(
                  classes.drawerPaper,
                  !showNavigation && classes.drawerPaperClose,
                ),
              }}
              onClose={() => handleNavigationToggle()}
              open={showNavigation}
            >
              <div className={classes.drawerInner}>
                {navItems && navItems.length
                  ? navItems.map((item, index) => {
                      const listItemIcon = item.src ? (
                        <img className={classes.iconImg} src={item.src} />
                      ) : (
                        <ListItemIcon>
                          <Icon>{item.icon}</Icon>
                        </ListItemIcon>
                      );

                      switch (item.type) {
                        case 'BUTTON': {
                          return (
                            <ListItem
                              button
                              key={item.title + index}
                              component={(props: any) =>
                                item.slug ? (
                                  <Link {...props} to={item.slug} />
                                ) : (
                                  <a {...props} href={item.href} />
                                )
                              }
                            >
                              {listItemIcon}
                              <ListItemText primary={item.title} />
                            </ListItem>
                          );
                        }
                        case 'DIVIDER': {
                          return <Divider key={index} />;
                        }
                        default:
                          return null;
                      }
                    })
                  : null}
              </div>
            </Drawer>
          </div>
        </Hidden>
      </div>
    );
  }
}

export default injectSheet(styles)(Navigation);
