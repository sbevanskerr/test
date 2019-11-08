import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

class RedirectButton extends React.Component {
  doRedirect = () => {
    this.props.history.push(this.props.target);
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.doRedirect}>{this.props.children}</Button>
      </React.Fragment>
    );
  }
}

RedirectButton.propTypes = {
  target: PropTypes.string,
  history: PropTypes.instanceOf(Object),
  children: PropTypes.instanceOf(Object),
};

export default withRouter(RedirectButton);
