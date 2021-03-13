import React from 'react';
import ReactDOM from 'react-dom';
import CombatVisualizer from './components/CombatVisualizer';

function CV() {
    return (
        <CombatVisualizer />
    );
}

export default CV;

if (document.getElementById('content')) {
    ReactDOM.render(<CV />, document.getElementById('content'));
}
