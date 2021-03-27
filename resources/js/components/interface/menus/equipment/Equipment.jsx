import React, { useState } from 'react';

import EquipmentSlots from './components/EquipmentSlots';
import EquipmentStats from './components/EquipmentStats';
import EquipmentSlotModal from './components/EquipmentSlotModal';

const Equipment = () => {

    const [selectedSlot, setSelectedSlot] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const selectSlot = ({ target: { dataset : { slot } } }) => {
        setSelectedSlot(slot);
        handleShowModal();
    }

    console.log(head_slots);

    return (
        <div className="container equipment pt-3">
            <div className="row justify-content-md-center">
                <div className="col-md equipment__loadout m-auto">
                    <EquipmentSlots selectSlot={selectSlot} />
                </div>
                <div className="col-md table equipment__stats m-auto pt-4 table-responsive table-borderless">
                    <EquipmentStats />
                </div>
                <EquipmentSlotModal selectedSlot={selectedSlot} showModal={showModal} handleCloseModal={handleCloseModal}/>
            </div>
        </div>
    );
};

export default Equipment;