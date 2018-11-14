import * as React from 'react';
import App from './App';
import MaterialUI from './MaterialUI';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

interface State {
  lightTheme: boolean;
}

class Root extends React.Component<State> {
  state = {
    lightTheme: true,
  };

  componentDidMount() {
    const lightTheme = localStorage.getItem('light-theme');
    // This is primarily here to force a re render due to
    // Firebase hosting not rendering the inital route
    this.setState({
      lightTheme: lightTheme == 'true' ? true : false,
    });
  }

  handleLightThemeChange = () => {
    const themeString: string = String(!this.state.lightTheme);
    localStorage.setItem('light-theme', themeString);
    this.setState({ lightTheme: !this.state.lightTheme });
  };

  render() {
    const { lightTheme } = this.state;
    return (
      <BrowserRouter>
        <MaterialUI lightTheme={lightTheme}>
          <App handleLightThemeChange={this.handleLightThemeChange} />
        </MaterialUI>
      </BrowserRouter>
    );
  }
}

export default Root;
