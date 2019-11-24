import React from 'react';
import PropTypes from 'prop-types';

class ProviderList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.category.name}</p>
      </React.Fragment>
    );
  }
}

ProviderList.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};

export default ProviderList;
