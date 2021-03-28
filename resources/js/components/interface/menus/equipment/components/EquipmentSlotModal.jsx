import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
    Modal
} from 'react-bootstrap';

const EquipmentSlotModal = ({selectedSlot, equipment, showModal, handleCloseModal, handleEquipmentSearch}) => {

    return (
        <Modal show={showModal} onHide={handleCloseModal} className="pl-0">
            <Modal.Body className="pb-4">
                <Modal.Header closeButton className="p-0 pb-3 border-bottom-0"/> 
                <div className="equipment__search-bar input-group input-group-lg rounded-top">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder={`Search ${selectedSlot} slots`} onChange = {e => handleEquipmentSearch(e, selectedSlot)} />
                </div>
                <div className="equipment__dropdown-menu-container">
                    <div id="equipment_dropdown-menu" className="equipment__dropdown-menu dropdown-menu-show border">
                        {equipment.map((item, i) => {
                            return <a key={i} className="equipment__dropdown-item dropdown-item"><img src={`data:image/png;base64, ${item.icon}`} alt={item.name}/>{item.wiki_name}</a>
                        })}
                    </div>
                </div>    
            </Modal.Body>
        </Modal>
    );
};

export default EquipmentSlotModal;