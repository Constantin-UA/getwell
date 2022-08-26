import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import './logisticDrive.scss';

function LogisticDrive(props) {
	const { title, subtitle } = props.lang.logisticDrive;
	const [logisticArr, setLogisticArr] = useState([
		'logisticDrive-img-1',
		'logisticDrive-img-2',
		'logisticDrive-img-3',
	]);
	const [logisticBg, setLogisticBg] = useState('logisticDrive-img-1');
	const [count, setCount] = useState(0);
	useEffect(() => {
		const changeBg = setInterval(() => {
			setLogisticBg(logisticArr[count]);
			if (count < 2) {
				setCount(count + 1);
			} else {
				setCount(0);
			}
		}, 4000);
		return () => {
			clearInterval(changeBg);
		};
	}, [count, logisticBg, logisticArr]);
	return (
		<section id="logisticDrive" className="logisticDrive">
			<div className={logisticBg}></div>
			<Container className="logisticDrive-wrapper">
				<div className="logisticDrive-title">{title}</div>
				<div className="logisticDrive-subtitle">{subtitle}</div>
			</Container>
		</section>
	);
}
export default LogisticDrive;
