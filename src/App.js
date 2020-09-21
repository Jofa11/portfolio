import React from 'react';
import Navbar from './Navbar';
import josh from './josh.jpeg';
import { Container, ListGroup, Image, Nav } from 'react-bootstrap';
import './App.css';
import trainer from './trainer.png';
import fleet from './fleet.png';
import guitar from './guitar.png';
import vader from './vader.png';

function App() {
	return (
		<Container fluid className='app-container'>
			<Navbar />
			<Container id='intro'>
				<Image src={josh} roundedCircle fluid className='profile-image' />
				<h2 className='hello'>Hello there.</h2>
				<h4>
					My name is Joshua Favre. I am a junior full stack developer who is
					eager to go to work for the right company.
				</h4>
			</Container>
			<Container className='xp-container'>
				<h4>Experience With These Technologies:</h4>
				<ListGroup variant='flush'>
					<ListGroup.Item>Javascript</ListGroup.Item>
					<ListGroup.Item>React</ListGroup.Item>
					<ListGroup.Item>Bootstrap</ListGroup.Item>
					<ListGroup.Item>HTML</ListGroup.Item>
					<ListGroup.Item>CSS</ListGroup.Item>
					<ListGroup.Item>NodeJS</ListGroup.Item>
					<ListGroup.Item>MongoDB</ListGroup.Item>
					<ListGroup.Item>Mongoose</ListGroup.Item>
					<ListGroup.Item>Python</ListGroup.Item>
					<ListGroup.Item>Django</ListGroup.Item>
				</ListGroup>
			</Container>
			<Container id='about-me'>
				<h2>About Me</h2>
				<br />
				<h4>
					I am a recent graduate of General Assembly's Software Engineering
					Immersive Remote bootcamp. The experience of getting to learn and work
					with many other talented individuals to achieve the same goals was
					amazing! I was drawn to coding and computer science purely out of
					curiosity. I am now totally hooked! My professional background is in
					the casino industry. To my pleasant surprise, the hospitality skills I
					already possessed really proved valuable working in a team
					environment. I am sure that would cross over to communicating with
					clients as well.
				</h4>
			</Container>
			<Container className='projects-container'>
				<h2>Projects</h2>
				<br />
				<Nav.Link
					href='https://gentle-reaches-48748.herokuapp.com/'
					target='_blank'>
					<Image className='project-img' src={trainer} alt='X Trainer'></Image>
				</Nav.Link>
				<Nav.Link
					href='https://warm-brook-93750.herokuapp.com/'
					target='_blank'>
					<Image className='project-img' src={fleet} alt='fleet app'></Image>
				</Nav.Link>
				<Nav.Link
					href='https://project-two-guitar-app.herokuapp.com/'
					target='_blank'>
					<Image className='project-img' src={guitar} alt='guitar app'></Image>
				</Nav.Link>
				<Nav.Link
					href='https://jofa11.github.io/trivia-project/'
					target='_blank'>
					<Image className='project-img' src={vader} alt='star wars app'></Image>
				</Nav.Link>
			</Container>
		</Container>
	);
}

export default App;
