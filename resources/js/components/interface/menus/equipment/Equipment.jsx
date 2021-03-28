import React, { useEffect, useState } from 'react';
import EquipmentSlots from './components/EquipmentSlots';
import EquipmentStats from './components/EquipmentStats';
import EquipmentSlotModal from './components/EquipmentSlotModal';
import axios from "axios";


const Equipment = ({ currentEquipmentStats, setCurrentEquipmentStats }) => {

    const [selectedSlot, setSelectedSlot] = useState("head");
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const selectSlot = ({ target: { dataset : { slot } } }) => {
        setSelectedSlot(slot);
        handleShowModal();
    }

    const [equipment, setEquipment] = useState(head_slots);

    const handleEquipmentSearch = ({ target: { value } }, slot) => {
        axios.get(`/equipment/${selectedSlot}`, { params: { searchQuery: value }}).then(({ data: { data }}) => {
            setEquipment(data);
        });
    }

    const getEquipment = () => {
        switch(selectedSlot) {
            case "head":
                return head_slots;
            case "cape":
                return cape_slots;
            case "neck":
                return neck_slots;
            case "ammo":
                return ammo_slots;
            case "weapon":
                return weapon_slots;
            case "body":
                return body_slots;
            case "shield":
                return shield_slots;
            case "legs":
                return leg_slots;
            case "hands":
                return hand_slots;
            case "feet":
                return foot_slots;
            case "ring":
                return ring_slots;
        }
    }

    useEffect(() => {
        setEquipment(getEquipment());
    }, [selectedSlot])

    return (
        <div className="container equipment pt-3">
            <div className="row justify-content-md-center">
                <div className="col-md equipment__loadout m-auto">
                    <EquipmentSlots selectSlot={selectSlot} />
                </div>
                <div className="col-md table equipment__stats m-auto pt-4 table-responsive table-borderless">
                    <EquipmentStats currentEquipmentStats={currentEquipmentStats}/>
                </div>
                <EquipmentSlotModal selectedSlot={selectedSlot} equipment={equipment} showModal={showModal} handleCloseModal={handleCloseModal} handleEquipmentSearch={handleEquipmentSearch}/>
            </div>
        </div>
    );
};

export default Equipment;