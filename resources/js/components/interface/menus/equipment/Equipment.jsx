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

    const [modalEquipment, setModalEquipment] = useState(head_slots);

    const handleEquipmentSearch = ({ target: { value } }, slot) => {
        axios.get(`/equipment/${selectedSlot}`, { params: { searchQuery: value }}).then(({ data: { data }}) => {
            setModalEquipment(data);
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
            case "leg":
                return leg_slots;
            case "hand":
                return hand_slots;
            case "foot":
                return foot_slots;
            case "ring":
                return ring_slots;
        }
    }

    useEffect(() => {
        setModalEquipment(getEquipment());
    }, [selectedSlot])

    const [gearSetup, setGearSetup] = useState({
        head: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        cape: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        neck: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        ammo: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        weapon: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        body: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        shield: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        leg: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        hand: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        foot: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        },
        ring: {
            icon: null,
            equipmentBonuses: {
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0,
                attack_slash: 0,
                attack_stab: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0,
                defence_slash: 0,
                defence_stab: 0,
                magic_damage: 0,
                melee_strength: 0,
                prayer: 0,
                ranged_strength: 0,
                requirements: null,
                slot: ""
            }
        }
    });

    useEffect(() => {
        const equipmentKeys = (Object.keys(gearSetup));

        const equipmentBonusesKeys = (Object.keys(gearSetup[equipmentKeys[0]].equipmentBonuses)).slice(0, 14);

        const totalBonuses = {
            attack_crush: 0,
            attack_magic: 0,
            attack_ranged: 0,
            attack_slash: 0,
            attack_stab: 0,
            defence_crush: 0,
            defence_magic: 0,
            defence_ranged: 0,
            defence_slash: 0,
            defence_stab: 0,
            magic_damage: 0,
            melee_strength: 0,
            prayer: 0,
            ranged_strength: 0
        }

        equipmentKeys.map((equipmentKey) => {
            equipmentBonusesKeys.map((equipmentBonusKey) => {
                totalBonuses[equipmentBonusKey] += gearSetup[equipmentKey].equipmentBonuses[equipmentBonusKey]; 
            });
        });

        setCurrentEquipmentStats(totalBonuses);

    }, [gearSetup]);

    return (
        <div className="container equipment pt-3">
            <div className="row justify-content-md-center">
                <div className="col-md equipment__loadout m-auto">
                    <EquipmentSlots selectSlot={selectSlot} gearSetup={gearSetup} />
                </div>
                <div className="col-md table equipment__stats m-auto pt-4 table-responsive table-borderless">
                    <EquipmentStats currentEquipmentStats={currentEquipmentStats}/>
                </div>
                <EquipmentSlotModal 
                selectedSlot={selectedSlot} 
                modalEquipment={modalEquipment} 
                showModal={showModal} 
                handleCloseModal={handleCloseModal} 
                handleEquipmentSearch={handleEquipmentSearch}
                setGearSetup={setGearSetup}
                />
            </div>
        </div>
    );
};

export default Equipment;