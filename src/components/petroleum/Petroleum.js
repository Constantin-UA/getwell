import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './petroleum.scss';

function Petroleum(props) {
	const { title, subtitle } = props.lang.petroleum;
	const [petroleumArr, setPetroleumArr] = useState([
		'petroleum-img-1',
		'petroleum-img-2',
		'petroleum-img-3',
	]);
	const [petroleumBg, setPetroleumBg] = useState('petroleum-img-1');
	const [count, setCount] = useState(0);
	useEffect(() => {
		const changeBg = setInterval(() => {
			setPetroleumBg(petroleumArr[count]);
			if (count < 2) {
				setCount(count + 1);
			} else {
				setCount(0);
			}
		}, 5000);
		return () => {
			clearInterval(changeBg);
		};
	}, [count, petroleumBg, petroleumArr]);
	return (
		<section id="petroleum" className="petroleum">
			<div className={petroleumBg}></div>
			<Container className="petroleum-wrapper">
				<div className="petroleum-title">{title}</div>
				<div className="petroleum-subtitle">{subtitle}</div>
			</Container>
		</section>
	);
}
export default Petroleum;
