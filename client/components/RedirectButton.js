import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class RedirectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.props.target} />;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.renderRedirect()}
        <Button onClick={this.setRedirect}>{this.props.children}</Button>
      </React.Fragment>
    );
  }
}

export default RedirectButton;
