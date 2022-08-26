import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1w from '../../assets/consumers/icon/1-w.png';
import icon2w from '../../assets/consumers/icon/2-w.png';
import icon3w from '../../assets/consumers/icon/3-w.png';
import icon4w from '../../assets/consumers/icon/4-w.png';
import icon5w from '../../assets/consumers/icon/5-w.png';
import icon6w from '../../assets/consumers/icon/6-w.png';

import { useState } from 'react';
import './consumers.scss';

function Consumers(props) {
	const { title, subtitle, itemT1, itemT2, itemT3, itemT4, itemT5, itemT6 } = props.lang.consumers;
	const [bgClass, setBgClass] = useState('bg-img-1');
	const changeBg = (img) => {
		setBgClass(img);
	};
	return (
		<section className="consumers" id="consumers">
			<div className={bgClass}></div>
			<div className="consumers-title">{title}</div>
			<Container>
				<div className="consumers-subtitle">{subtitle}</div>
				<Row>
					<Col onMouseEnter={() => changeBg('bg-img-1')} className="consumers-item">
						<img className="icon" src={icon1w} alt="icon" />
						<div className="consumers-item-title">{itemT1}</div>
					</Col>
					<Col onMouseEnter={() => changeBg('bg-img-2')} className="consumers-item">
						<img className="icon" src={icon2w} alt="icon" />
						<div className="consumers-item-title">{itemT2}</div>
					</Col>
					<Col onMouseEnter={() => changeBg('bg-img-3')} className="consumers-item">
						<img className="icon" src={icon3w} alt="icon" />
						<div className="consumers-item-title">{itemT3}</div>
					</Col>
				</Row>
				<Row>
					<Col onMouseEnter={() => changeBg('bg-img-4')} className="consumers-item">
						<img className="icon" src={icon4w} alt="icon" />
						<div className="consumers-item-title">{itemT4}</div>
					</Col>
					<Col onMouseEnter={() => changeBg('bg-img-5')} className="consumers-item">
						<img className="icon" src={icon5w} alt="icon" />
						<div className="consumers-item-title">{itemT5}</div>
					</Col>
					<Col onMouseEnter={() => changeBg('bg-img-6')} className="consumers-item">
						<img className="icon" src={icon6w} alt="icon" />
						<div className="consumers-item-title">{itemT6}</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
export default Consumers;
