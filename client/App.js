import { hot } from 'react-hot-loader/root';
import React from 'react';
import axios from 'axios';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import MainPage from './components/MainPage';
import DisplayProviders from './components/DisplayProviders';
import Title from './components/Title';
import TopLevelCategories from './components/categories/TopLevelCategories';

import paths from './RouterPaths';

import { Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path={paths.mainPath} component={MainPage} />
          <Route
            path={paths.searchPath}
            render={() => (
              <SearchBar
                providers={this.state.providers}
                updateFilterText={this.updateFilterText}
              />
            )}
          />
          <Route
            path={paths.displayProvidersPath}
            render={() => (
              <DisplayProviders
                providers={this.state.providers}
                filterText={this.state.filterText}
                selectedProvider={this.state.selectedProvider}
                updateSelected={this.updateSelected}
              />
            )}
          />
          <Route
            exact
            path={paths.topLevelCategoriesPath}
            component={TopLevelCategories}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default hot(App);
