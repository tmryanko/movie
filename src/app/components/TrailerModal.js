import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import '../style/nav.sass';


const TrailerModal = ({
  onShow, onHide, url, title 
}) => (
  <div className="modal-container">
    <Modal
      show={ onShow }
      onHide={ onHide }>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">
          { title }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe title="video" width="550" height="315" src={ url }>f</iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ onHide }>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>
);


export default TrailerModal;

TrailerModal.defaultProps = {
  onShow: null,
  onHide: () => {},
  url: null,
  title: ''
};
  
TrailerModal.propTypes = {
  onShow: PropTypes.bool,
  onHide: PropTypes.func,
  url: PropTypes.string,
  title: PropTypes.string
};
