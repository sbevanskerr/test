import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.filterRef = React.createRef();

    this.setFilterRef = (element) => {
      this.filterRef = element;
    };
  }

  filterUpdate() {
    this.props.updateFilterText(this.filterRef.value);
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Type to Filter'
          ref={this.setFilterRef}
          onChange={this.filterUpdate.bind(this)}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  updateFilterText: PropTypes.func,
};

export default SearchBar;
