import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './agricultural.scss';

function Agricultural(props) {
	const { title, subtitle } = props.lang.agricultural;
	const [agroArr, setAgroArr] = useState([
		'agricultural-img-1',
		'agricultural-img-2',
		'agricultural-img-3',
		'agricultural-img-4',
	]);
	const [agroBg, setAgroBg] = useState('agricultural-img-1');
	const [count, setCount] = useState(0);
	useEffect(() => {
		const changeBg = setInterval(() => {
			setAgroBg(agroArr[count]);
			if (count < 3) {
				setCount(count + 1);
			} else {
				setCount(0);
			}
		}, 4000);
		return () => {
			clearInterval(changeBg);
		};
	}, [count, agroBg, agroArr]);
	return (
		<section id="agricultural" className="agricultural">
			<div className={agroBg}></div>
			<Container className="agricultural-wrapper">
				<div className="agricultural-title">{title}</div>
				<div className="agricultural-subtitle">{subtitle}</div>
			</Container>
		</section>
	);
}
export default Agricultural;
