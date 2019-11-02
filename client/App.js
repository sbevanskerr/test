import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.scss';
import axios from 'axios';
import { Table } from 'react-bootstrap';

import SearchBar from './components/SearchBar';
import DisplayProviders from './components/DisplayProviders';
import Title from './components/Title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { providers: null, filterText: '', selectedProvider: null };
  }
  componentDidMount() {
    axios
      .get('/api/provider')
      .then((res) => {
        // handle success
        this.setState({ providers: res.data });
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  }

  updateFilterText(value) {
    this.setState({ filterText: value });
  }

  selectedUpdate(id) {
    console.log(id);
    this.setState({ selectedProvider: id });
  }

  render() {
    return (
      <div className='App'>
        <body>
          <Title />
          <SearchBar updateFilterText={this.updateFilterText.bind(this)} />
          <Table responsive>
            <DisplayProviders
              providers={this.state.providers}
              filterText={this.state.filterText}
              selectedProvider={this.state.selectedProvider}
              selectedUpdate={this.selectedUpdate.bind(this)}
            />
          </Table>
        </body>
      </div>
    );
  }
}

export default hot(App);
