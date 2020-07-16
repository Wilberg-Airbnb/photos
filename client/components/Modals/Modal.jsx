import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('photo-modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ReactDOM.createPortal(<div>{this.props.children}</div>, modalRoot);
  }
}

export default Modal;
