import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

function CustomModal({show, handleClose, children}) {

  return (
    <>
      <Modal show={show} size="sm">
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Row className="w-100"> 
            <Col>
            <Button className="modal-btn btn-shadow" variant="success" onClick={() => handleClose(true)}>
            Yes
          </Button>
            </Col>
            <Button className="modal-btn btn-shadow" variant="secondary" onClick={() => handleClose(false)}>
            No
          </Button>
            <Col>
            </Col>
          </Row>
         
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal
