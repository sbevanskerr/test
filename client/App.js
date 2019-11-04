import { hot } from 'react-hot-loader/root';
import React from 'react';
import logo from './logo.svg';
import './App.scss';

import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  updateFilterText(value) {
    this.setState({ filterText: value });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <ToolBar/>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            {this.state.filterText}
          </a>
        </header>
        <body>
          <SearchBar updateFilterText={this.updateFilterText.bind(this)} />
        </body>
      </div>
    );
  }
}

export default hot(App);
