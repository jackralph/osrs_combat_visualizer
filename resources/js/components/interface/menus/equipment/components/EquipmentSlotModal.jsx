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
                <div className="monster__search-bar input-group input-group-lg rounded-top">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder={`Search ${selectedSlot} slots`} onChange = {e => handleEquipmentSearch(e, selectedSlot)} />
                </div>
                <div className="monster__dropdown-menu-container">
                    <div id="monster_dropdown-menu" className="monster__dropdown-menu dropdown-menu-show border">
                        {equipment.map((item, i) => {
                            return <a key={i} className="monster__dropdown-item dropdown-item">{item.wiki_name}</a>
                        })}
                    </div>
                </div>    
            </Modal.Body>
        </Modal>
    );
};

export default EquipmentSlotModal;