import React from 'react';
import { Nav } from 'react-bootstrap';
import './App.css'

function Navbar() {
	return (
		<Nav className='justify-content-end' id='nav'>
			<Nav.Item>
				<Nav.Link id='intro'>Intro</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link id='about-me'>About Me</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default Navbar;
