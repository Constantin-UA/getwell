import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import mainLogo from '../../assets/image/logo-t.png';
import './main.scss';

function Main(props) {
	const [backArr, setBackArr] = useState(['img-1', 'img-2', 'img-3', 'img-4', 'img-5']);
	const [backClass, setBackClass] = useState('main img-1');
	const [count, setCount] = useState(0);
	useEffect(() => {
		const changeBg = setInterval(() => {
			setBackClass('main ' + backArr[count]);
			if (count < 4) {
				setCount(count + 1);
			} else {
				setCount(0);
			}
		}, 6000);
		return () => {
			clearInterval(changeBg);
		};
	}, [count, backClass, backArr]);

	return (
		<section className="main" id="main">
			<div className={backClass}></div>
			<Container className="main-wrapper">
				<img className="main-logo" src={mainLogo} alt="logo" />
				<h1 className="main-title">{props.lang.main.title}</h1>
			</Container>
		</section>
	);
}
export default Main;
