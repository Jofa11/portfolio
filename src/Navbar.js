import React from 'react';
import { Nav } from 'react-bootstrap';
import './App.css'

function Navbar() {
	return (
		<Nav className='justify-content-end'>
			<Nav.Item>
				<Nav.Link href='#intro' className='nav'>
					Intro
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href='#about-me' className='nav'>
					About Me
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href='#projects' className='nav'>
					Projects
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href='#contact' className='nav'>
					Contact Me
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default Navbar;
