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
            <Button className="modal-btn btn-shadow w-100" variant="success" onClick={() => handleClose(true)}>
            Yes
          </Button>
            </Col>
            
            <Col>
            <Button className="modal-btn btn-shadow w-100" variant="secondary" onClick={() => handleClose(false)}>
            No
          </Button>
            </Col>
          </Row>
         
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal
