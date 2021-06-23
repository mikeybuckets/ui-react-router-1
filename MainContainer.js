import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';

export class MainContainerComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export class GenericComponent extends MainContainerComponent {
  render() {
    return (
      <div>
        <h1>PHP Checker</h1>
        <h2>You are currently viewing</h2>
        <h1>{this.props.$state$.name} </h1>
      </div>
    );
  }
}
