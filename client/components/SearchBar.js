import React from 'react';
import PropTypes from 'prop-types';

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';

class SearchBar extends React.Component {
  filterUpdate = (value) => {
    if (value !== undefined) {
      console.log(value);
      this.props.updateFilterText(value);
    }
  };

  render() {
    const isLoading =
      this.props.providers || this.props.providers === {} ? false : true;
    const providers = this.props.providers ? this.props.providers : {};
    const providerList = Object.values(providers);
    return (
      <React.Fragment>
        <Typeahead
          id='searchBox'
          labelKey='name'
          options={providerList.map((option) => option['Provider Name'])}
          placeholder={isLoading ? 'Loading...' : 'Search for a provider'}
          ref={this.filterRef}
          onInputChange={this.filterUpdate}
          onChange={(e) => this.filterUpdate(e[0])}
        />
      </React.Fragment>
    );
  }
}

SearchBar.propTypes = {
  updateFilterText: PropTypes.func,
  providers: PropTypes.instanceOf(Object),
};

export default SearchBar;
