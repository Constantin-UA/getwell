import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import Offcanvas from 'react-bootstrap/Offcanvas';
import menuIcon from '../../assets/menu/square.png';
import logo from '../../assets/main/logo-t.png';

import './offcan.scss';
function Offcan(props) {
	const { itemT1, itemT2, itemT3, itemT4, itemT5, itemT6, itemT7 } = props.lang.menu;

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const onLangSelect = (e) => {
		let arr = e.target.parentNode;
		arr.childNodes.forEach((el) => {
			if (el.classList) el.classList.remove('active');
		});
		e.target.classList.add('active');
	};

	return (
		<>
			<img className="offcan-img-menu" onClick={handleShow} src={menuIcon} alt="menu" />

			<Offcanvas className="offcan" show={show} onHide={handleClose} scroll="true" backdrop={true}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title className="offcan-top-wrap">
						<img className="offcan-logo" src={logo} alt="logo" />
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Container>
						<Nav className="me-auto offcan-wrapper">
							<Nav.Link className="offcan-item" href="#main">
								{itemT1}
							</Nav.Link>
							<Nav.Link className="offcan-item" href="#about">
								{itemT2}
							</Nav.Link>
							<Nav.Link className="navbarcompon-item" href="#petroleum">
								{itemT3}
							</Nav.Link>
							<Nav.Link className="navbarcompon-item" href="#consumers">
								{itemT4}
							</Nav.Link>
							<Nav.Link className="navbarcompon-item" href="#logisticDrive">
								{itemT5}
							</Nav.Link>
							<Nav.Link className="navbarcompon-item" href="#agricultural">
								{itemT6}
							</Nav.Link>
							<Nav.Link className="offcan-item" href="#contacts">
								{itemT7}
							</Nav.Link>
						</Nav>
						<div className="offcan-lang">
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
					</Container>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default Offcan;
