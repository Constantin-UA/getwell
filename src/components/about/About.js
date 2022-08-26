import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import './about.scss';

function About(props) {
	const {
		title,
		subtitle,
		descrT,
		acTitle1,
		acTitle2,
		acTitle3,
		acTitle4,
		acTitle5,
		acDescr1,
		acDescr2,
		acDescr3,
		acDescr4,
		acDescr5,
	} = props.lang.about;

	return (
		<section className="about" id="about">
			<div className="about-bg"></div>
			<Container className="about-wrapper">
				<div className="about-title">{title}</div>
				<div className="about-subtitle">{subtitle}</div>
				<div className="about-descr">
					<div className="about-descr-title">{descrT}</div>
					<Accordion className="about-accordion-wrapper">
						<Accordion.Item eventKey="0">
							<Accordion.Header className="about-ac-title">{acTitle1}</Accordion.Header>
							<Accordion.Body className="about-ac-descr">{acDescr1}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>{acTitle2}</Accordion.Header>
							<Accordion.Body className="about-ac-descr">{acDescr2}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>{acTitle3}</Accordion.Header>
							<Accordion.Body className="about-ac-descr">{acDescr3}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>{acTitle4}</Accordion.Header>
							<Accordion.Body className="about-ac-descr">{acDescr4}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>{acTitle5}</Accordion.Header>
							<Accordion.Body className="about-ac-descr">{acDescr5}</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</Container>
		</section>
	);
}
export default About;
