import React from 'react';
import { Alert } from 'react-bootstrap';

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert
          variant='primary'
          style={{ marginTop: '1em' }}
          className='blue-cool-70v-bg white-0'
        >
          <i
            className='fas fa-hand-holding-heart'
            style={{ paddingRight: '0.5em' }}
          ></i>
          Life can get tough sometimes. We get it. We’re here to help. Find free
          resources here.
        </Alert>
      </React.Fragment>
    );
  }
}

export default Homepage;
