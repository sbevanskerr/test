import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <h1>My GNV Resource Finder</h1>
          <p>
            Use this website to search for resources by name or by category.
          </p>
          <p>
            <Button variant='primary'>Link to Tutorial</Button>
          </p>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Homepage;
