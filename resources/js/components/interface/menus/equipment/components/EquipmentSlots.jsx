import React from 'react';

const EquipmentSlots = ({ selectSlot, gearSetup }) => {

    const {head, cape, neck, ammo, weapon, body, shield, leg, hand, foot, ring} = gearSetup;

    return (
        <React.Fragment>
            <div className="row text-center pb-1">
                <div className="col">
                    <div className="equipment__slot-container">
                        <img src={head.icon && `data:image/png;base64, ${head.icon}` || "/icons/default-equipment-icons/Head_slot.png"} alt="Head slot" data-slot="head" onClick={selectSlot} />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pb-1">
                <div className="col-3 p-0 text-center">
                    <div className="equipment__slot-container">
                        <img src={cape.icon && `data:image/png;base64, ${cape.icon}` || "/icons/default-equipment-icons/Cape_slot.png"} alt="Cape slot" data-slot="cape" onClick={selectSlot} />
                    </div>
                </div>
                <div className="col-3 p-0 text-center">
                    <div className="equipment__slot-container">
                        <img src={neck.icon && `data:image/png;base64, ${neck.icon}` || "/icons/default-equipment-icons/Neck_slot.png"} alt="Neck slot" data-slot="neck" onClick={selectSlot} />
                    </div>
                </div>
                <div className="col-3 p-0 text-center">
                    <div className="equipment__slot-container">
                        <img src={ammo.icon && `data:image/png;base64, ${ammo.icon}` || "/icons/default-equipment-icons/Ammo_slot.png"} alt="Ammo slot" data-slot="ammo" onClick={selectSlot} />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pb-1">
                <div className="col-3 p-0 text-center">
                    <div className="equipment__slot-container">
                        <img src={weapon.icon && `data:image/png;base64, ${weapon.icon}` || "/icons/default-equipment-icons/Weapon_slot.png"} alt="Weapon slot" data-slot="weapon" onClick={selectSlot} />
                    </div>
                </div>
                <div className="col-3 p-0 text-center">
                    <div className="equipment__slot-container">
                        <img src={body.icon && `data:image/png;base64, ${body.icon}` || "/icons/default-equipment-icons/Body_slot.png"} alt="Body slot" data-slot="body" onClick={selectSlot} />
                    </div>
                </div>
                <div className="col-3 p-0 text-center">
                    <div className="equipment__slot-container">
                        <img src={shield.icon && `data:image/png;base64, ${shield.icon}` || "/icons/default-equipment-icons/Shield_slot.png"} alt="Shield slot" data-slot="shield" onClick={selectSlot} />
                    </div>
                </div>
            </div>
            <div className="row text-center pb-1">
                <div className="col">
                    <div className="equipment__slot-container">
                        <img src={leg.icon && `data:image/png;base64, ${leg.icon}` || "/icons/default-equipment-icons/Legs_slot.png"} alt="Legs slot" data-slot="leg" onClick={selectSlot} />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 p-0 text-center">
                    <div className="equipment__slot-container">
                        <img src={hand.icon && `data:image/png;base64, ${hand.icon}` || "/icons/default-equipment-icons/Hands_slot.png"} alt="Hands slot" data-slot="hand" onClick={selectSlot} />
                    </div>
                </div>
                <div className="col-3 p-0 text-center">
                    <div className="equipment__slot-container">
                        <img src={foot.icon && `data:image/png;base64, ${foot.icon}` || "/icons/default-equipment-icons/Feet_slot.png"} alt="Feet slot" data-slot="foot" onClick={selectSlot} />
                    </div>
                </div>
                <div className="col-3 p-0 text-center">
                    <div className="equipment__slot-container">
                        <img src={ring.icon && `data:image/png;base64, ${ring.icon}` || "/icons/default-equipment-icons/Ring_slot.png"} data-slot="ring" onClick={selectSlot} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EquipmentSlots;