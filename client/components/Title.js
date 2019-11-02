import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1></h1>
        <Jumbotron>
          <h1>My GNV Resource Finder</h1>
          <p>
            Use this website to search for resources by name or by category.
          </p>
          <p>
            <Button variant='primary'>Link to Tutorial</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Homepage;
