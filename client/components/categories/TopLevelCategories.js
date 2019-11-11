import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import paths from '../../RouterPaths';

class Categories extends React.Component {
  render() {
    const iconSize = 3;

    const rowStyle = {
      margin: 'auto',
      justifyContent: 'center',
    };
    const colStyle = { padding: '0 0' };
    return (
      <React.Fragment>
        <Container
          style={{
            maxWidth: '30em',
            margin: 'auto auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Row style={rowStyle}>
            <Col style={colStyle}>
              <CategoryCard
                iconName='child'
                iconSize={iconSize}
                providerName={'Family\nServices'}
                path={paths.familyServicesPath}
              />
            </Col>
            <Col style={colStyle}>
              <CategoryCard
                iconName='book'
                iconSize={iconSize}
                providerName='Education'
                path={'/'}
              />
            </Col>
            <Col style={colStyle}>
              <CategoryCard
                iconName='money-check-edit-alt'
                iconSize={iconSize}
                providerName='Finance'
                path={paths.financePath}
              />
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col style={colStyle}>
              <CategoryCard
                iconName='medkit'
                iconSize={iconSize}
                providerName={'Health\nServices'}
                path={paths.healthServicesPath}
              />
            </Col>
            <Col style={colStyle}>
              <CategoryCard
                iconName='clipboard'
                iconSize={iconSize}
                providerName='Jobs'
                path={'/'}
              />
            </Col>
            <Col style={colStyle}>
              <CategoryCard
                iconName='clipboard'
                iconSize={iconSize}
                providerName={'Legal\nServices'}
                path={paths.legalServicesPath}
              />
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col style={colStyle}>
              <CategoryCard
                iconName='shield'
                iconSize={iconSize}
                providerName={'Crisis\nServices'}
                path={paths.crisisServicesPath}
              />
            </Col>
            <Col style={colStyle}>
              <CategoryCard
                iconName='bus-alt'
                iconSize={iconSize}
                providerName='Transport'
                path={'/'}
              />
            </Col>
            <Col style={colStyle}>
              <CategoryCard
                iconName='utensils-alt'
                iconSize={iconSize}
                providerName={'Basic\nNeeds'}
                path={paths.basicNeedsPath}
              />
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col style={colStyle}>
              <CategoryCard
                iconName='ellipsis-v'
                iconSize={iconSize}
                providerName='Other'
                path={paths.otherPath}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Categories;
