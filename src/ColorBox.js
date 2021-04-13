import React, { Component } from 'react';
// import ColorBox from './ColorBox.js';

export default class ColorBox extends Component {
  state = {
    todos: [],
  };
  newOpacity = this.props.opacity - 0.1;

  render() {
    return (
      <div className="color-box" style={{ opacity: this.props.opacity }}>
        {this.newOpacity >= 0.1 && <ColorBox opacity={this.newOpacity} />}
      </div>
    );
  }
}
