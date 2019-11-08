import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import RedirectButton from './RedirectButton';

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <RedirectButton target='/categories'>
                Find a resource now.
              </RedirectButton>
            </Col>
            <Col>
              <Button>What can I qualify for?</Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default MainPage;
