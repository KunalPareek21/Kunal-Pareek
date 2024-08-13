import React, { Component } from 'react';
import './Popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showJsModal: false,
    };
  }

  handleShowJs = () => {
    this.setState({ showJsModal: true });
  };

  handleCloseJs = () => {
    this.setState({ showJsModal: false });
  };

  render() {
    const { showJsModal } = this.state;
    return (
      <div className="popup-container">
        <div className="button-container">
          <button className="popup_button_customs" onClick={this.handleShowJs}>
            Click To Open Popup
          </button>
        </div>
        <div className={`js-modal ${showJsModal ? 'show' : ''}`}>
          <div className="js-modal-content">
            <span className="close" onClick={this.handleCloseJs}>&times;</span>
            <p>JavaScript Modal Content</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
