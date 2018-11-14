import * as React from 'react';
import App from './App';
import MaterialUI from './MaterialUI';
import { HashRouter } from 'react-router-dom';
import './App.css';

interface State {
  lightTheme: boolean;
}

class Root extends React.Component<State> {
  state = {
    lightTheme: true,
  };

  handleLightThemeChange = () => {
    console.log(this.state.lightTheme);
    this.setState({ lightTheme: !this.state.lightTheme });
  };

  render() {
    const { lightTheme } = this.state;
    return (
      <MaterialUI lightTheme={lightTheme}>
        <HashRouter>
          <App handleLightThemeChange={this.handleLightThemeChange} />
        </HashRouter>
      </MaterialUI>
    );
  }
}

export default Root;
