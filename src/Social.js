import React from 'react';
import { Nav, Image } from 'react-bootstrap';
import './App.css';
import face from './facebook.png';
import tweet from './twitter.png';
import linked from './link.png';
import insta from './insta.png';
import mail from './mail.png';


function Social() {
    return (
			<Nav id='contact'>
				<Nav.Item>
					<Nav.Link
						href='mailto: favrejoshua@yahoo.com'
						target='_blank'>
						<Image src={mail} />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						href='https://www.linkedin.com/in/joshua-favre/'
						target='_blank'>
						<Image src={linked} />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						href='https://www.facebook.com/joshua.favre.3/'
						target='_blank'>
						<Image src={face} />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						href='https://www.instagram.com/favrejoshua/'
						target='_blank'>
						<Image src={insta} />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='https://twitter.com/FavreJoshua' target='_blank'>
						<Image src={tweet} />
					</Nav.Link>
				</Nav.Item>
			</Nav>
		);
}

export default Social;