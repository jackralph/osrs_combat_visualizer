import React from 'react';

const InventoryTabs = ({ setCurrentTab }) => {

    const handleTabClick = ({ target: { name } }) => {
        setCurrentTab(name);
    }

    return (
        <div className="row text-center mb-3">
            <div className="col p-1">
                <img src="/images/Combat_icon.png" name="combat_styles" onClick={handleTabClick} alt="Combat Icon"/>
            </div>
            <div className="col p-1">
                <img src="/images/Skills_icon.png" name="levels" onClick={handleTabClick} alt="Skills Icon"/>
            </div>
            <div className="col p-1">
                <img src="/images/Monster_examine_icon.png" name="monsters" onClick={handleTabClick} alt="Monster Examine Icon"/>
            </div>
            <div className="col p-1">
                <img src="/images/Inventory_icon.png" name="inventory" onClick={handleTabClick} alt="Inventory Icon"/>
            </div>
            <div className="col p-1">
                <img src="/images/Worn_equipment_icon.png" name="equipment" onClick={handleTabClick} alt="Worn Equipment Icon"/>
            </div>
            <div className="col p-1">
                <img src="/images/Prayer_tab_icon.png" name="prayers" onClick={handleTabClick} alt="Prayer Tab Icon"/>
            </div>
            <div className="col p-1">
                <img src="/images/Spellbook_icon.png" name="spellbook" onClick={handleTabClick} alt="Spellbook Icon"/>
            </div>
        </div>
    );
};

export default InventoryTabs;