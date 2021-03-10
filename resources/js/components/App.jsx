import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Index/Container'

function App() {
    return (
        <Container />
    );
}

export default App;

if (document.getElementById('content')) {
    ReactDOM.render(<App />, document.getElementById('content'));
}
