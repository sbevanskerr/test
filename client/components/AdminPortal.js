import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class AdminPortal extends React.Component {
  render() {
    return (
      <SearchBar
        providers={this.props.providers}
        updateFilterText={(junk) => {
          return;
        }}
      />
    );
  }
}
export default AdminPortal;
