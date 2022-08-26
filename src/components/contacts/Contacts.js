import MyMapComponent from '../myMapComponent/MyMapComponent';
import phone from '../../assets/contacts/phone-call.png';
import email from '../../assets/contacts/envelope.png';
import addres from '../../assets/contacts/home.png';
import './contacts.scss';

function Contacts(props) {
	return (
		<section className="contacts" id="contacts">
			<h4 className="contacts-title">{props.lang.contacts.title}</h4>
			<div className="contacts-wrapper">
				<div className="contacts-item">
					<div className="contacts-item-addres">
						<div className="contacts-item-title">
							<img className="icons" src={addres} alt="addres icon" />
							{props.lang.contacts.addresT}
						</div>
						<div className="contacts-item-subtitle">{props.lang.contacts.addresS}</div>
					</div>
					<div className="contacts-item-phone">
						<div className="contacts-item-title">
							<img className="icons" src={phone} alt="addres icon" />

							{props.lang.contacts.phoneT}
						</div>
						<div className="contacts-item-subtitle">{props.lang.contacts.phoneS}</div>
					</div>
					<div className="contacts-item-mail">
						<div className="contacts-item-title">
							<img className="icons" src={email} alt="addres icon" />

							{props.lang.contacts.emailT}
						</div>
						<div className="contacts-item-subtitle">{props.lang.contacts.emailS}</div>
					</div>
				</div>

				<div className="contacts-map">
					<MyMapComponent />
				</div>
			</div>
		</section>
	);
}
export default Contacts;
