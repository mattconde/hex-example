import React, { Component } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import theme from './utils/theme';
import Splash from './containers/views/splash/Splash';
import Menu from './containers/views/menu/Menu';
import World from './containers/views/world/World';

injectGlobal`
  ${styledNormalize}

  html{
    min-height: 100%;
    box-sizing: border-box;
    font: normal 100% -apple-system, BlinkMacSystemFont, sans-serif;
  }

  body {
    width: 100%;
    min-height: 100%;
  }

  html,
  body {
    overflow: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  :focus {
    outline: 1px solid ${theme.colors.blue2};
    box-shadow: 0 0 12px ${theme.colors.blue2};
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'splash',
    };
  }
  transitionView = newView => {
    this.setState({
      currentView: newView,
    });
    return newView;
  };
  renderCurrentView(view) {
    switch (view) {
      case 'splash':
        return <Splash {...this.state} transitionView={this.transitionView} />;
      case 'menu':
        return <Menu {...this.state} transitionView={this.transitionView} />;
      case 'world':
        return <World {...this.state} transitionView={this.transitionView} />;
      default:
        return <div children={'view error :/'} />;
    }
  }
  render() {
    const { currentView } = this.state;
    return <ThemeProvider theme={theme}>{this.renderCurrentView(currentView)}</ThemeProvider>;
  }
}

export default App;
