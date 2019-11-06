import React from 'react';
import Button from 'react-bootstrap/Button'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h>Life can get tough sometimes.
          We get it. We're here to help.
          Find free resources here.</h>
        <Button>Find a resource now.</Button>
        <Button>What can I qualify for?</Button>
      </div>
    );
  }
}

export default MainPage;