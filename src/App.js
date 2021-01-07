import React from 'react';
import Navbar from './Navbar';
import Social from './Social';
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
					My name is <span className='josh'>Joshua Favre</span>. I am a full
					stack <span className='josh'>Software Engineer</span> who is eager to
					bring my talents to the right team.
				</h4>
			</Container>
			<div class='xp-container'>
				{/* <Container fluid className='xp-container'> */}
				<h4>Experience With These Technologies:</h4>
				{/* <ListGroup variant='flush' fluid>
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
				</ListGroup> */}
				<ul class='listStyle'>
					<li class='list-item'>Javascript</li>
					<li class='list-item'>React</li>
					<li class='list-item'>Bootstrap</li>
					<li class='list-item'>HTML</li>
					<li class='list-item'>CSS</li>
					<li class='list-item'>NodeJS</li>
					<li class='list-item'>ExpressJS</li>
					<li class='list-item'>MongoDB</li>
					<li class='list-item'>PhaserJS</li>
					<li class='list-item'>Python</li>
					<li class='list-item'>Django</li>
				</ul>
			</div>
			{/* </Container> */}
			<Container id='about-me' className='about'>
				<h2>About Me</h2>
				<br />
				<h4>
					I love to write code! I would totally be coding on my own even if I
					couldn't do this professionally. I've really worked well on my own.
					However, working with a team is so enjoyable to me. And this year, due
					to COVID19, I've been introduced to working collaboratively via Zoom.
					The experience of getting to learn and work with many other talented
					individuals to achieve the same goals has been amazing! I was drawn to
					coding and computer science purely out of curiosity. I am now totally
					hooked!{' '}
					<a
						href='https://docs.google.com/document/d/18t87PlpK-ww_PE8Or8BWujdb3QeVHrm6fj6cYdcxvuI/edit?usp=sharing'
						target='_blank'
						className='purp'>
						Here is a link to my resume
					</a>
					. My professional background is in the casino industry. To my pleasant
					surprise, the hospitality skills I already possessed really proved
					valuable working in a team environment. I am sure that experience
					would cross over to communicating with clients as well. In my free
					time, I mostly enjoy spending time with my family and traveling. I
					also love tennis, video games, skateboarding, and of course coding!
				</h4>
			</Container>
			<Container className='projects-container'>
				<h2 id='projects'>Projects</h2>
				<br />
				<Nav>
					<Nav.Item className='pad-bot'>
						<a
							href='https://gentle-reaches-48748.herokuapp.com/'
							target='_blank'>
							<h3>X Trainer</h3>
						</a>
						<h5>A full stack project using React and Django</h5>
						<Nav.Link
							href='https://gentle-reaches-48748.herokuapp.com/'
							target='_blank'>
							<Image
								className='project-img'
								src={trainer}
								alt='X Trainer'></Image>
						</Nav.Link>
						<Nav.Link
							className='repo'
							href='https://github.com/Jofa11/X-Trainer-Frontend'
							target='_blank'>
							X Trainer GitHub Repo
						</Nav.Link>
					</Nav.Item>
					<br />
					<Nav.Item className='pad-bot'>
						<a href='https://warm-brook-93750.herokuapp.com/' target='_blank'>
							<h3>Fleet</h3>
						</a>
						<h5>
							A group project I worked on using React and MongoDB with Mongoose
						</h5>
						<Nav.Link
							href='https://warm-brook-93750.herokuapp.com/'
							target='_blank'>
							<Image
								className='project-img'
								src={fleet}
								alt='fleet app'></Image>
						</Nav.Link>
						<Nav.Link
							className='repo'
							href='https://github.com/SEIR622-Cass-theCassettes'
							target='_blank'>
							Fleet GitHub Repo
						</Nav.Link>
					</Nav.Item>
					<br />
					<Nav.Item className='pad-bot'>
						<a
							href='https://project-two-guitar-app.herokuapp.com/'
							target='_blank'>
							<h3>Guitar Chord App</h3>
						</a>
						<h5>A React project that accesses a third party API</h5>
						<Nav.Link
							href='https://project-two-guitar-app.herokuapp.com/'
							target='_blank'>
							<Image
								className='project-img'
								src={guitar}
								alt='guitar app'></Image>
						</Nav.Link>
						<Nav.Link
							className='repo'
							href='https://github.com/Jofa11/Guitar-App'
							target='_blank'>
							Guitar Chord App GitHub Repo
						</Nav.Link>
					</Nav.Item>
					<br />
					<Nav.Item className='pad-bot'>
						<a href='https://jofa11.github.io/trivia-project/' target='_blank'>
							<h3>Star Wars Trivia</h3>
						</a>
						<h5>A game built using vanilla Javascript, HTML, and CSS</h5>
						<Nav.Link
							href='https://jofa11.github.io/trivia-project/'
							target='_blank'>
							<Image
								className='project-img'
								src={vader}
								alt='star wars app'></Image>
						</Nav.Link>
						<Nav.Link
							className='repo'
							href='https://github.com/Jofa11/trivia-project'
							target='_blank'>
							Star Wars Trivia GitHub Repo
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
			<Social />
			<Navbar />
		</Container>
	);
}

export default App;
