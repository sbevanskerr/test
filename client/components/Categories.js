import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Categories extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <i className='fas fa-home'></i>
            </Col>
            <Col>
              <i className='fas fa-home'></i>
            </Col>
            <Col>
              <i className='fas fa-home'></i>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='fas fa-home'></i>
            </Col>
            <Col>
              <i className='fas fa-home'></i>
            </Col>
            <Col>
              <i className='fas fa-home'></i>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <i className='fas fa-home'></i>
            </Col>
            <Col>
              <i className='fas fa-home'></i>
            </Col>
            <Col>
              <i className='fas fa-home'></i>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Categories;
