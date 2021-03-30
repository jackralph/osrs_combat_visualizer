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
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        cape: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        neck: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        ammo: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        weapon: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        body: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        shield: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        leg: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        hand: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        foot: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        },
        ring: {
            attackBonuses: {
                attack_stab: 0,
                attack_slash: 0,
                attack_crush: 0,
                attack_magic: 0,
                attack_ranged: 0
            },
            defenceBonuses: {
                defence_stab: 0,
                defence_slash: 0,
                defence_crush: 0,
                defence_magic: 0,
                defence_ranged: 0
            },
            otherBonuses: {
                melee_strength: 0,
                ranged_strength: 0,
                magic_damage: 0,
                prayer: 0
            },
            targetSpecific: {
                undead: 0,
                slayer: 0
            }
        }
    });

    return (
        <div className="container equipment pt-3">
            <div className="row justify-content-md-center">
                <div className="col-md equipment__loadout m-auto">
                    <EquipmentSlots selectSlot={selectSlot} />
                </div>
                <div className="col-md table equipment__stats m-auto pt-4 table-responsive table-borderless">
                    <EquipmentStats currentEquipmentStats={currentEquipmentStats}/>
                </div>
                <EquipmentSlotModal selectedSlot={selectedSlot} modalEquipment={modalEquipment} showModal={showModal} handleCloseModal={handleCloseModal} handleEquipmentSearch={handleEquipmentSearch}/>
            </div>
        </div>
    );
};

export default Equipment;