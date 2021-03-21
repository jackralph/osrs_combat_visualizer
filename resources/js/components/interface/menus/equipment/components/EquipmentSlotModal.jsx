import React, { useState } from 'react';

import {
    Button,
    Modal
} from 'react-bootstrap';

const EquipmentSlotModal = ({selectedSlot, showModal, handleCloseModal}) => {

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>{selectedSlot}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EquipmentSlotModal;