import * as React from 'react';
import Page from '../../components/Page';
import Spacer from '../../components/Spacer';
import tileData from './tileData';
import {
  createStyles,
  Typography,
  withStyles,
  GridListTile,
  GridList,
  Button,
} from '@material-ui/core';

interface Props {
  classes: {
    container: string;
    pageTitle: string;
    gridList: string;
    subheader: string;
  };
}

interface State {
  showAmount: number;
}

const styles = (theme: any) =>
  createStyles({
    container: {
      padding: theme.spacing.unit * 3,
    },
    pageTitle: {
      marginBottom: theme.spacing.unit * 3,
    },

    gridList: {
      // width: 500,
      // height: 450,
    },
    subheader: {
      width: '100%',
    },
  });

class Photos extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showAmount: 7,
    };
  }

  render() {
    const { classes } = this.props;
    const { showAmount } = this.state;

    return (
      <Page>
        <div className={classes.container}>
          <Spacer />
          <Typography
            variant="h1"
            className={classes.pageTitle}
            color="textPrimary"
          >
            <b>Photos</b>
          </Typography>
          <Spacer />

          <Spacer height={75} />

          <GridList cellHeight={340} className={classes.gridList} cols={3}>
            {tileData.map((tile, index) =>
              index < showAmount ? (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.img} />
                </GridListTile>
              ) : null,
            )}
          </GridList>
          <Spacer />
          {showAmount < tileData.length ? (
            <div style={{ textAlign: 'center' }}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => this.setState({ showAmount: showAmount * 3 })}
              >
                Show more
              </Button>
            </div>
          ) : null}
        </div>
      </Page>
    );
  }
}

export default withStyles(styles)(Photos);
