import React from 'react';
import ReactDOM from 'react-dom';

import from './style.css';

export class HomeContainer extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(<HomeContainer />, document.getElementById('app'));
