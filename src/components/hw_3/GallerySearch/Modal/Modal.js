import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  };

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    };
  };

  handleBackroup = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    };
  };

  render () {
    return createPortal(
      <div class="overlay">
        <div class="modal">
          <img src={this.props.url} alt={this.props.tags} />
        </div>
      </div>);
  };
  
};