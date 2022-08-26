import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/image/newLogo.png';
import Offcan from './Offcan';

import './navbarCompon.scss';
function NavbarCompon(props) {
	const { itemT1, itemT2, itemT3, itemT4, itemT5, itemT6, itemT7 } = props.lang.menu;

	const onLangSelect = (e) => {
		let arr = e.target.parentNode;
		arr.childNodes.forEach((el) => {
			if (el.classList) el.classList.remove('active');
		});
		e.target.classList.add('active');
	};

	return (
		<>
			<Navbar variant="dark" className="navbarcompon">
				<Container className="navbarcompon-container">
					<Navbar.Brand href="#main">
						<img className="navbarcompon-logo" src={logo} alt="logo" />
					</Navbar.Brand>
					<Nav className="me-auto navbarcompon-wrapper">
						<Nav.Link className="navbarcompon-item" href="#about">
							{itemT2}
						</Nav.Link>
						<Nav.Link className="navbarcompon-item" href="#petroleum">
							{itemT3}
						</Nav.Link>
						<Nav.Link className="navbarcompon-item" href="#logisticDrive">
							{itemT5}
						</Nav.Link>
						<Nav.Link className="navbarcompon-item" href="#agricultural">
							{itemT6}
						</Nav.Link>
						<Nav.Link className="navbarcompon-item" href="#contacts">
							{itemT7}
						</Nav.Link>
					</Nav>
					<div className="navbarcompon-lang">
						<a
							onClick={(e) => {
								props.langSelected(0);
								onLangSelect(e);
							}}
							href="#sl"
							className="header-lang-sl active"
						>
							SL
						</a>
						/
						<a
							onClick={(e) => {
								props.langSelected(1);
								onLangSelect(e);
							}}
							href="#eng"
							className="header-lang-en"
						>
							ENG
						</a>
						/
						<a
							onClick={(e) => {
								props.langSelected(2);
								onLangSelect(e);
							}}
							href="#ru"
							className="header-lang-ru"
						>
							RUS
						</a>
						/
						<a
							onClick={(e) => {
								props.langSelected(3);
								onLangSelect(e);
							}}
							href="#ua"
							className="header-lang-ua"
						>
							UA
						</a>
					</div>
					<Offcan
						className="navbarcompon-button"
						lang={props.lang}
						langSelected={props.langSelected}
					/>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarCompon;
