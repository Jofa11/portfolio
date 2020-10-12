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
			<Nav.Item>
				<Nav.Link
					href='https://docs.google.com/document/d/18t87PlpK-ww_PE8Or8BWujdb3QeVHrm6fj6cYdcxvuI/edit?usp=sharing'
					target='_blank'
					className='nav'>
					Resume
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default Navbar;
