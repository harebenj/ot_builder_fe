import React, { Component } from 'react';
import './App.css';

import SnippetDropdown from './components/SnippetDropdown';
import AppHeader from './components/AppHeader';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <SnippetDropdown />
      </div>
    );
  }
}

export default App;
