import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown,);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown,);
  };

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    };
  };

  handleBackroup = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render () {
    return createPortal(
      <div onClick={this.handleBackroup}>
        <div>
          <img src={this.props.url} alt={this.props.url} />
        </div>
      </div>,
      modalRoot,
    );
  };
  
};