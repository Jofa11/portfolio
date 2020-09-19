import React from 'react';
import Navbar from './Navbar';
import josh from './josh.jpeg';
import { Container, Col, Image } from 'react-bootstrap';

import './App.css';

function App() {
	return (
		<Container fluid className='app-container'>
      <Navbar />
			<Image src={josh} roundedCircle fluid className='profile-image' />
			<h2 id='intro'>Hello there.</h2>
			<h4>
				My name is Joshua Favre. I am a junior full stack developer who is eager
				to go to work for the right company.
			</h4>
		</Container>
	);
}

export default App;
