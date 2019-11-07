import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.scss';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import MainPage from './components/MainPage'
import DisplayProviders from './components/DisplayProviders';
import Title from './components/Title';
import NavBar from './components/NavBar';


import { Route, Switch } from 'react-router-dom'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { providers: {}, filterText: '', selectedProvider: '' };
  }

  componentDidMount() {
    axios
      .get('/api/provider')
      .then((res) => {
        this.setState({ providers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateFilterText = (value) => {
    this.setState({ filterText: value });
  };

  updateSelected = (id) => {
    this.setState({ selectedProvider: id });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Title />
        <SearchBar
          providers={this.state.providers}
          updateFilterText={this.updateFilterText}
        />
        {/* <DisplayProviders
          providers={this.state.providers}
          filterText={this.state.filterText}
          selectedProvider={this.state.selectedProvider}
          updateSelected={this.updateSelected}
        /> */}
        <Switch>
          <Route exact path ="/" component={MainPage}/>
          <Route path="/toolbar" component={ToolBar}/>
        </Switch>
      <React.Fragment>
    );
  }
}

export default hot(App);