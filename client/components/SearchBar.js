import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

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
      <Form>
        <Form.Control
          type='text'
          placeholder='Type to Filter'
          ref={this.setFilterRef}
          onChange={this.filterUpdate.bind(this)}
        />
      </Form>
    );
  }
}

SearchBar.propTypes = {
  updateFilterText: PropTypes.func,
};

export default SearchBar;
