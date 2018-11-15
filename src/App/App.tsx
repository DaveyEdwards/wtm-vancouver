import * as React from 'react';
import AppMenuBar from './AppMenuBar';
import Navigation from './Navigation';
import Routes from '../routes';

interface Props {
  handleLightThemeChange: () => void;
}

interface State {
  showNavigation: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showNavigation: false,
    };
  }

  componentDidMount() {
    if (window.innerWidth > 960) {
      this.setState({ showNavigation: true });
    } else {
      this.setState({ showNavigation: false });
    }
  }

  handleNavigationToggle = () => {
    this.setState({ showNavigation: !this.state.showNavigation });
  };

  render() {
    const { showNavigation } = this.state;
    const { handleLightThemeChange } = this.props;

    return (
      <>
        <AppMenuBar
          showNavigation={showNavigation}
          handleNavigationToggle={this.handleNavigationToggle}
          handleLightThemeChange={handleLightThemeChange}
        />
        <Navigation
          showNavigation={showNavigation}
          handleNavigationToggle={this.handleNavigationToggle}
        />
        <div
          style={{
            marginTop: 48,
            position: 'relative',
            width: '100%',
            maxWidth: '100%',
            paddingBottom: 120,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <Routes />
        </div>
      </>
    );
  }
}

export default App;
