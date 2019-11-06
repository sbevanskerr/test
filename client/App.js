import { hot } from 'react-hot-loader/root';
import React from 'react';
import logo from './logo.svg';
import './App.scss';

import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import MainPage from './components/MainPage'

import { Route, Switch } from 'react-router-dom'
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
        <Switch>
          <Route exact path ="/" component={MainPage}/>
          <Route path="/toolbar" component={ToolBar}/>
        </Switch>
      </div>
    );
  }
}

export default hot(App);
//render() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <SearchBar updateFilterText={this.updateFilterText.bind(this)} />
//         <ToolBar/>
//       </header>
//       <body>
//         <MainPage/>
        
//       </body>
//     </div>
//   );
// }