import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('photo-modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // This is the modal that our styled modal will be rendered into
    // photo-modal gets rendered as childer
    return ReactDOM.createPortal(<div>{this.props.children}</div>, modalRoot);
  }
}

export default Modal;
