import React from 'react';
import { Nav } from 'react-bootstrap';
import './App.css'

function Navbar() {
	return (
		<Nav className='justify-content-end'>
			<Nav.Item>
				<Nav.Link id='intro'>Intro</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default Navbar;
