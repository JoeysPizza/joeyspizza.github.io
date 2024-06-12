import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ModalTemporarilyClosed() {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Joeys Pizza is temporarily closed</ModalHeader>
        <ModalBody>
            <div style={{ margin: '15px 0', fontSize: '20px' }}>
              The restaurant <b>Joeys Pizza</b> located at <br />1801 S Wolf Rd in Hillside, IL is temporarily closed.
            </div>
        </ModalBody>

        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}
