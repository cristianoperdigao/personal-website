import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import LayoutTopbar from './components/helpers/topbar';
import Main from './components/main';

function App() {
	return (
        <div>
            <LayoutTopbar />
            <Container>
                <Main/>
            </Container>
        </div>
	);
}

export default App;
